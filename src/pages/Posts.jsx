import React, { useEffect, useRef, useState } from "react";
import '../style/App.css'
import useFetching from './../hooks/useFetching';
import PostServices from './../API/PosrServices';
import MyButton from './../components/UI/button/MyButton';
import PostForm from './../components/PostForm';
import MyLoader from './../components/UI/loader/MyLoader';
import PostList from './../components/PostList';
import Pagination from './../components/Pagination';
import { usePosts } from "../hooks/usePosts";
import getPages from "../utils/pages";
import MyModal from "../components/UI/MyModal/MyModal";
import PostFilter from "../components/PostFilter";
import { useObserver } from './../hooks/useObserver';
import MySelect from "../components/UI/select/MySelect";

function Posts() {

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const lastElement = useRef()

    const [fetchPosts, IsPostsLoading, postsError ] = useFetching( async () => {
        const response = await PostServices.getAll(limit, page)
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPages(totalCount, limit));
    })

    useEffect(() => {
        fetchPosts();
    }, [page, limit])

    useObserver(lastElement, page < totalPages, IsPostsLoading, () => {
        setPage(page + 1)
    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (p) => {
        setPage(p);
    }

    const sortedAndSearchedPosts  = usePosts(posts, filter.sort, filter.query)

    return (
        <div className="App">
        <MyButton
        style = {{marginTop: '25px'}}
            onClick = {() => setModal(true)}
        >
            Создать пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create ={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0px'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />

        <MySelect 
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
            {value: 5, name: '5'},
            {value: 10, name: '10'},
            {value: 15, name: '15'},
            {value: -1, name: 'показать все'}
        ]}
        />

        {
            postsError &&
            <h1>Произошла ошибка {postsError}</h1>
        }
        <PostList remove = {removePost} posts={sortedAndSearchedPosts} title={'asdasdasd'}/> 
        <div ref={lastElement} style={{height: 20 , background: 'red'}}></div>
        {
            IsPostsLoading &&
            <div><MyLoader/></div>
        }
        <Pagination 
        page = {page}
        totalPages={totalPages}
        changePage={changePage}
        />
        </div>
    );
}

export default Posts;
