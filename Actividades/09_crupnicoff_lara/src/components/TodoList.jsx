function List(props) {
    return(
        <div className="ListContainer">
            <h2>{props.lista}</h2>
            <div className="ListItemsContainer">
                {props.children}
            </div>
        </div>
    )
}

export default List;