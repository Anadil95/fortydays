import React, { Component } from "react";

import {Textfield,Button} from 'react-mdl';





class Profile extends Component {
  render() {
    return (
      <div className="Register">
      <div className="s1">

	<br/>
      <p>الاسم</p>
      <Textfield
    onChange={() => {}}
    label="..."
    style={{width: '200px'}}
    />

      <p>تاريخ الميلاد</p>
      <Textfield
    onChange={() => {}}
    label="..."
    style={{width: '200px'}}
    />

      <p>التخصص</p>
      <Textfield
    onChange={() => {}}
    label="..."
    style={{width: '200px'}}
    />

      <p>رقم الجوال</p>
      <Textfield
      onChange={() => {}}
      pattern="-?[0-9]*(\.[0-9]+)?"
      error="Input is not a number!"
      label="Number..."
      style={{width: '200px'}}
      />

      <p>البريد الالكتروني</p>
      <Textfield
    onChange={() => {}}
    label="xxxx@xxxx.xxx..."
    style={{width: '200px'}}
    />


      <p>كلمة المرور</p>
      <Textfield
      onChange={() => {}}
      pattern="-?[0-9]*(\.[0-9]+)?"
      error="Input is not a number!"
      label="Number..."
      style={{width: '200px'}}
      />
      <p>تأكيد كلمة المرور</p>
      <Textfield
      onChange={() => {}}
      pattern="-?[0-9]*(\.[0-9]+)?"
      error="Input is not a number!"
      label="Number..."
      style={{width: '200px'}}
      />

    <br/>
      <Button raised accent ripple>تعديل</Button>
      <nbsp/>
      <br/>
      </div>
      <br/>
</div>


    );
  }
}

export default Profile;
