import React from 'react'
import PropTypes from 'prop-types'
import SearchPanel from './search-panel'

const Controller = ({ term, handleSearch, toggleForm }) => (
    <div>
        <SearchPanel
            term={term}
            handleSearch={handleSearch}
            toggleForm={toggleForm}
        />
    </div>
)

Controller.propTypes = {
    terms: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}

export default Controller