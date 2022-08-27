import React from 'react'
import  { useEffect, useState } from 'react'

const Home = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch("https://assessment.api.vweb.app/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='container py-4'>
      <div className='py-4'>
        <h1>FetechedData</h1>
        <table className="table border shadow table-success  table-striped ">
        


        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">User_id</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i) => (
             <tr>
              <th scope='row'>{i + 1}</th>
              <td>{user.user_id}</td>
              <td>{user.name}</td>
              <td><a className='btn btn-success '><i class="bi bi-eye"></i></a></td>
              <td> <a className='btn btn-primary '><i class="bi bi-pencil-square"></i></a></td>
              <td><a className='btn btn-danger'><i class="bi bi-archive-fill"></i></a></td>
             </tr>

            ))
}
        </tbody>
      </table>
    </div>
    </div>
  )
}


export default Home