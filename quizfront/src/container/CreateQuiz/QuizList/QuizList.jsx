import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table,Button } from 'react-bootstrap';
import './quizList.scss'
function QuizList() {
    const [QuizList, setQuizList] = useState([])
    const [refresh, setrefresh] = useState(false)
    useEffect(() => {
      axios.get("http://localhost:5000/api/v1/quiz/getall").then((res)=>{
          console.log(res,"res")
          setQuizList(res.data)
      })
    }, [refresh])

    const handleDelete = (e,id) => {
        axios.delete(`http://localhost:5000/api/v1/quiz/delete/${id}`).then((res)=>{
          console.log(res,"res")
          setrefresh(!refresh)

      })
    }
    
  return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Group</th>
              <th>Questions</th>
              <th>Answer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {QuizList.map((obj)=>{
                  return (
                    <tr>
                    <td>{obj.group}</td>
                    <td>{obj.question}</td>
                    <td>{obj.Answer}</td>
                    <td className='buttontd'><Button>EDIT</Button><Button variant="danger" onClick={(e)=>handleDelete(e,obj._id)}>DELETE</Button></td>
                  </tr>
                  )
              })}
          </tbody>
        </Table>
      );
}

export default QuizList