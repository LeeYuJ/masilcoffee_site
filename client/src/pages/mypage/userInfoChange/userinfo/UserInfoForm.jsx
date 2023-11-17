import React from 'react'
import { InputBox } from '../../confirmPassword/ConfirmPassword.style'
import Input from '../../UI/Input'
import { InputBoxColumn } from '../UserInfoChange.style'

function UserInfoForm({InputInfo, emailRef}) {
  return (
    <div>
      <InputBox>
              <Input
                ref={emailRef}
                input={{
                  name: "이메일",
                  type: "email",
                  id: "change_email",
                  placeholder: "변경할 이메일을 입력해주세요.",
                }}
              />
            </InputBox>
            <InputBoxColumn>
            {InputInfo.map(info => {
              return (
                <Input 
                  ref={info.ref}
                  input={{
                    name: info.name,
                    type: info.type,
                    id: info.id,
                    placeholder: info.placeholder,
                  }}
                />
              )
            })}
            </InputBoxColumn>
    </div>
  )
}

export default UserInfoForm
