import React from 'react'
import './JoinUsPage.css'
import IntroSlide from '../../Component/Home/IntroSlide'
import Text from '../../Tools/Dictionary'
export default function JoinUsPage() {

  return (

    <div className="JoinUsPage_Main_Div">

      <IntroSlide In={'right'} 
        title={Text('BecomeHocMember')} 
        p1={Text('HocHKIntro1')} 
        p2={Text("HocHKIntro2")}
        p3={''}
        path={'/login'}
        btnText={Text('Register2')}
        btn_color={"rgb(255, 87, 135)"}
        backgroundColor={'rgb(229, 21, 132)'}
        imgurl1={'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/43278465_1050137231832824_8238540013021691904_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fMk5Dw_XFO4AX-Mol3J&_nc_ht=scontent-hkt1-1.xx&oh=00_AfAMq_swJsT00BzOuojvpzGNIVw4ncB4R958lUo0dqEFzw&oe=654CA2BA'}
        imgurl2={'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/40482565_1030258780487336_1555105759782502400_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=XaXBDmUze1UAX84Loqf&_nc_ht=scontent-hkt1-1.xx&oh=00_AfAHMl5eklI9EzwVBLl2D848hIYv1YpjcjLUJAxoyOnN6g&oe=654CC9AE'}
        />
    
      <IntroSlide In={'left'} 
        title={Text('JoinSchoolNetworkText')} 
        p1={Text('JoinSchoolNetwork1')} 
        p2={Text('JoinSchoolNetwork2')}
        p3={Text('JoinSchoolNetwork3')}
        path={'/'}
        btnText={Text('Register2')}
        btn_color={"rgba(69, 171, 30, 0.958)"}
        backgroundColor={'rgb(105, 191, 101)'}
        imgurl1={'https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/267460385_1975780282601843_6444409744626910146_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_ohc=pyuDhYKCP14AX-E182K&_nc_ht=scontent-hkt1-2.xx&oh=00_AfCYBNHYt7on1J18bcJJjlIugPgr7rpNP3KBjs8ld3KqHA&oe=652A9126'}
        imgurl2={"https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/217203588_1860304424149430_7304693449907721988_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5614bc&_nc_ohc=BcTc4r1aoG4AX-9MEl9&_nc_ht=scontent-hkt1-2.xx&oh=00_AfAXBfxZ7XqXiEaMXgiIf9iyu9VJvjJdrg3yk5SAzk_V1g&oe=652B008E"}
        />

      <IntroSlide In={'right'} 
        title={Text('Teacher_ParentVolunTeersText')} 
        p1={Text('Teacher_ParentVolunTeers1')} 
        p2={Text('Teacher_ParentVolunTeers2')}
        p3={Text('Teacher_ParentVolunTeers3')}
        path={'/'}
        btnText={Text('Register2')}
        btn_color={"rgb(232, 153, 44)"}
        backgroundColor={'rgb(240, 197, 89)'}
        imgurl1={"https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-9/67684352_1252153511631194_7851777988973559808_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=ISsZ3H_SBO8AX92CW3W&_nc_ht=scontent-hkt1-2.xx&oh=00_AfBbx7_ZJ_OeqzAoKjyWRUI4Mwlk1KaSMkFvYGe__E02Cw&oe=654CAE2D"}
        imgurl2={"https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/68336512_1252148494965029_5589712370227216384_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=pOc59IG67qUAX-s02fV&_nc_ht=scontent-hkt1-1.xx&oh=00_AfA348-djG7iZPX79r2pbSl6fVFUjkw4iua7Hzu3ozIRag&oe=654CA57E"}
        />

      <IntroSlide In={'left'} 
        title={Text('StudentTutorVolunTeersText')} 
        p1={Text('StudentTutorVolunTeers1')} 
        p2={Text('StudentTutorVolunTeers2')}
        p3={Text('StudentTutorVolunTeers3')}
        path={'/'}
        btnText={Text('Register2')}
        btn_color={"rgb(57, 191, 233)"}
        backgroundColor={'rgb(47, 171, 223)'}
        imgurl1={"?"}
        imgurl2={"?"}
        />

    </div>
    
  )
}
