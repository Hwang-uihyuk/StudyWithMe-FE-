import React, { Children, createContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
//DarkModeContext에 필요한 데이터를 간직하고 있다.
//데이터를 컨텍스트에 담고있다.
export const ContextData = createContext();
//context를 만들떄는 항상 provider도 생성해줘야한다.
// 이 함수는 우산을 만들어준다고 생각하면 된다.
export default function ContextDataProvider({children}) {

const [idKey, setIdKey] = useState('테스트')
console.log(idKey)
  return (
    <ContextData.Provider value={{idKey,setIdKey}}>
        {children}
    </ContextData.Provider>
    
    
  )
}
