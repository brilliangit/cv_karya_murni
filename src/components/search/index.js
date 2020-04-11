import React from 'react';
const Search = (props) => {
    const [state, setstate] = React.useState(0)
    const { data } = props
    const handleChange = e => {
        setstate(e.target.value)
        // props.handleSearch(e.target.value)
    }
    const handleClick = () => {
        props.handleSearch(state)
    }
    return (
        <div className="container form-inline pull-right" >
            <select className="form-group form-control" onChange={handleChange} value={state}>
                <option selected value={0}>Choose...</option>
                {
                    data.map((v, i) => {
                        return <option key={v.id} value={v.id}>{v.name}</option>
                    })
                }
            </select>
            <button style={{marginLeft:'20px'}} className="form-group btn btn-outline-success" onClick={handleClick}>Search</button>
        </div>
    )
}

export default Search;