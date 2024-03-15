import React from 'react'

export default function List(props) {
  if(props.values.length!==0)
  {
  
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
                    {props.values.map((value, index) => (
                                    // console.log(props.values[index])
                                        <tr key={index}>
                                          <td>{index+1}</td>
                                          <td>{value.title}</td>
                                          <td>{value.detail}</td>
                                          <td>
                                            <button type="button" className="btn btn-danger" onClick={() =>{ 
                                              props.dlt(index)}}>Delete</button>
                                          </td>
                                        </tr>
                                      ))}
                </tbody>
        </table>
    </div>
  )
                  }
}
