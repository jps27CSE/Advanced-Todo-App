import React from 'react'
import PropTypes from 'prop-types'
import { Input, Button } from 'reactstrap'

const SearchPanel = ({ term, handleSearch, toggleForm }) => (
    <div className="d-flex">
        <Input
            placeholder="Enter Search Term"
            className="mr-3"
            value={term}
            onChange={e => handleSearch(e.target.value)}
        />
        <Button color="success" onClick={toggleForm}>
            New
       </Button>
    </div>
)

SearchPanel.propTypes = {
    terms: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}

export default SearchPanel