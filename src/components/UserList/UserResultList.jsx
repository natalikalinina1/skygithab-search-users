import * as S from './UserResultList.style'
import { UserItem } from '../UserItem/UserItem';
import React from 'react'

export function UserResultList ({data}) {
  return(
    <div>
      <S.Title>Результаты поиска:</S.Title>
    
      {(data) && (
        data?.map((item) => (
          <UserItem key={item.id} login={item.login} avatar={item.avatar_url} link={item.html_url} />
        )) )}
        
    </div>
        
    
  )
}
export default UserResultList