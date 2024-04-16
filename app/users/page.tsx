import React from 'react'

interface IUser {
    userId: number,
    title: string,
}

const UsersList = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    const users: IUser[] = await res.json()
    return (
        <div>
            <p className='text-[#000000] p-6'>UsersList</p>
            <ul>
                {users.map((user) => <li className="flex text-[22px] text-[#000000] font-semibold" key={user.userId}>{user.title}</li>)}
            </ul>
        </div>
    )
}

export default UsersList