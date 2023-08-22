import React, { useState, useMemo } from 'react';


const formatSize = size => {
  var i = Math.floor(Math.log(size) / Math.log(1024))
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  )
}

function SignUp() {
  return (
    <div className="">
      <h1>Mohib1</h1>
    </div>
  )
}

export default SignUp