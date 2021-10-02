import _ from 'lodash';

const Pagination = (props: any) => {
  const {count, pageSize, currentPage, onPageChange} = props;
  const pagesCount = count / pageSize;
  const pages = _.range(1, pagesCount + 1)

  return (
    <div >
      <ul className ="pagination justify-content-center">
        {pages.map((page:any) => (
          <li key = {page} className = {page === currentPage ? 'page-item active' : "page-item"}>
            <a className = "page-link" onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination;

