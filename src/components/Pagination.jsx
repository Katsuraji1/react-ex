import { usePagination } from "../hooks/usePagination";

function Pagination({page, totalPages, changePage}) {

    const pagesArray = usePagination(totalPages);

    return ( 
        <div className="page__wrapper">
        {
            pagesArray.map(p => 
            <span
                onClick={() => changePage(p)}
                key={p} 
                className={page === p ? 'page page__current' : 'page'}
            >
                {p}
            </span>
            )
        }
        </div>
    );
}

export default Pagination;