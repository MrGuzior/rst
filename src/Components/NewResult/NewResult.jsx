import React from 'react'
import {Form} from 'react-bootstrap'

const NewResult = () => {
    return (
        <div className='NewResult'>
            <h3>Resultatraportering</h3>
            <h5>Ladda upp .IGC fil</h5>
            <Form>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Välj .IGC fil att ladda upp" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default NewResult