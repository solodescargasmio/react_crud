import React from 'react'
import { useForm } from 'react-hook-form'


const EditUserForm = (props) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data,e) => {


        e.target.reset()
    }

    return(
        <form  onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" {...register("name", {
            required: "required",
          })}/>
            <div>
            {errors.name?.type === 'required' && "El name es requerido"}
            </div>
            <label>UserName</label>
            <input type="text" name="username" {...register("username", {
            required: "required",
          })}/>
            <div>
            {errors.name?.type === 'required' && "El username es requerido"}
            </div>
            <button>Edit user</button>
        </form>
    )

}

export default EditUserForm;