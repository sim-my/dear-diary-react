import page_not_found from "../assets/images/page_not_found.jpg";

const NotFound = () => {

    return(
        <div className="d-flex justify-content-center align-items-center">
            <img alt="Page not found" src={page_not_found} height="400" width="400" />
        </div>
    )
}

export default NotFound;