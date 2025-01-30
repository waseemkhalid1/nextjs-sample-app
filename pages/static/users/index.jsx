import React from 'react'

const UserPage = (props) => {
  console.log(props)
  return (
    <div>User (SSR)
      {props.data.users.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await (await fetch('https://dummyjson.com/users')).json()
  return {
    props: {
      data
    }
  }
}
export default UserPage
