import React, { useState, useEffect } from "react";

const GitHubUser = () => {
  const ids = ['toshiro-koba', 'aws', 'google', 'facebook']
  const [id, setId] = useState(ids[0])
  const [name, setName] = useState('')

  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setName(data.name)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])

  return (
    <div>
      <p>{id} の GitHub 上の名前は {name} です。</p>
      <button onClick={getRandomId}>change id</button>
    </div>
  )
}

export default GitHubUser;
