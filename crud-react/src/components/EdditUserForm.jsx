import React from 'react'
import { useForm } from 'react-hook-form'


const EditUserForm = (props) => {
    const { register, formState: { errors }, handleSubmit, setValue } = useForm({
        defaultValues:props.currentUser
    });
    setValue('name',props.currentUser.name)
    setValue('username',props.currentUser.username)
    const onSubmit = (data,e) => {
        data.id = props.currentUser.id
        
        props.updateUser(props.currentUser.id, data)

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