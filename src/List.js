import React from 'react'

export default function List(props) {
        
  return (
            <div className="m-5">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col" >#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Details</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{props.values.title}</td>
                    <td>{props.values.detail}</td>
                    <td>edit</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
        </table>
    </div>
  )
}
