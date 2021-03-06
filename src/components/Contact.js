import React from 'react'
import _ from 'underscore';
import TextInput from './TextInput';

class Contact extends React.Component {
  render() {

    return (
<section className='mw8 db ph3 center mt6 bg-transparent' id='form'>
<h2 className='fw4 mb5 pt5'>Get in touch</h2>
<form     name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact"/>
    <p hidden><label>Don’t fill this out:<input name="bot-field"/></label></p>
    <TextInput type='name' name='email' label='Name'/>
    <TextInput type='email' name='email' label='Email'/>
    <textarea rows="3" placeholder='Message' className="db w-100 bg-transparent pointer" name="message"/>
<button className='f6 grow no-underline bn ph4 pv3 mt3 dib bg-black white mt5 shadow-4 pointer'
    style={{borderRadius:'6px'}}
    type="submit">Send</button>
</form>
</section>
    )
  }
}
export default Contact

