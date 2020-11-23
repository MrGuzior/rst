import React from 'react'
import {Form} from 'react-bootstrap'

const NewResult = () => {
    return (
        <Form>
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Example file input" />
            </Form.Group>
        </Form>
    )
}

export default NewResult