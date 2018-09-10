const mail = require('./mail');
const options = {   
    host: 'smtp.163.com',
    secure: true,
    port: 465,
    user: 'wujinfeng_auto@163.com',
    pass: '',
    from: 'wujinfeng_auto@163.com',
    to: '923343669@qq.com',
    subject: '验证码',
    text: ''
};

let code = Math.random().toString().slice(-4); 
let opt = JSON.parse(JSON.stringify(options));
opt.text = '尊敬的用户，您的验证码是'+ code;
opt.to = '923343669@qq.com';

mail.sendEmail(options, (err)=>{
    if (err) {
      return  console.error(err);
    }
    console.log('ok');
})

