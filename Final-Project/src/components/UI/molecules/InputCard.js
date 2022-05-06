import React, {useState} from "react"
import Input from "../atoms/Input"
import CrudButtons from "../atoms/CrudButtons"
import { useSelector, useDispatch } from "react-redux"
import { create, edit } from "../../../slices/CrudSlice"

const InputCard = ({id, onClick}) => {
  const issue = useSelector((state) => state.crud).find(data => data.id === id);
  const dispatch = useDispatch();
  const [input, setInput] = useState(issue ? {
    id: issue.id,
    title:issue.title,
    status:issue.status,
    url:issue.url,
    createdAt:issue.createdAt,
    updatedAt:issue.updatedAt
    } : {
      id: "",
      title: "",
      status: "",
      url: "",
      createdAt: "",
      updatedAt: ""
  })

  return(
    <>
      <Input label="Id" value={input.id} handleClick={(e) => setInput({...input, id: e.target.value})} />
      <Input label="Title" value={input.title} handleClick={(e) => setInput({...input, title: e.target.value})}/>
      <Input label="Status" value={input.status} handleClick={(e) => setInput({...input, status: e.target.value})}/>
      <Input label="Url" value={input.url} handleClick={(e) => setInput({...input, url: e.target.value})}/>
      <Input label="Created at" value={input.createdAt} handleClick={(e) => setInput({...input, createdAt: e.target.value})}/>
      <Input label="Updated at" value={input.updatedAt} handleClick={(e) => setInput({...input, updatedAt: e.target.value})}/>
      <CrudButtons instruction="Save" onClick={onClick} dispatch={() => dispatch(id ? edit({id, input: input}) : create(input))}/>
    </>
  )
}

export default InputCard