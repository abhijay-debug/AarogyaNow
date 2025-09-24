import React from 'react'

const Testimonial = () => {
  return (
     <section id="testimonials" className=" section px-[20px]">
        <div className="text-center mb-[60px]">
          <small className="block text-[0.8rem] tracking-[3px] uppercase text-black font-semibold mb-[12px]">Testimonials</small>
          <h2 className="md:text-[2.4rem] text-[1.8rem] max-w-[800px] mx-auto font-semibold leading-[1.3]">Life-Changing Results</h2>
        </div>

        <div className="grid gap-[40px] md:grid-cols-3 testimonials-grid">
          <div className="p-[40px] border-l-[4px] border-black testimonial">
            <div className="italic text-[0.9rem] text-black/70 font-semibold mb-[20px]">“AarogyaNow has completely changed my relationship with food and fitness. The personalised check-ins kept me accountable and now I feel better than ever.”</div>
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-gray-200 mr-[15px] user-photo" />
              <div className="user-info"><strong className="block text-black text-[0.95rem]">Rahul </strong><span className="text-black/60 font-semibold   text-[0.8rem]">Entrepreneur, Bangalore</span></div>
            </div>
          </div>

          <div className="p-[40px] border-l-[4px] border-black testimonial">
            <div className="italic text-[0.9rem] text-black font-semibold mb-[20px]">“I love that I can snap my meals and workouts from anywhere. The feedback is instant and the recommendations are genuinely helpful.”</div>
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-gray-200 mr-[15px] user-photo" />
              <div className="user-info"><strong className="block text-black text-[0.95rem]">Sanjana</strong><span className="text-black/60 font-semibold text-[0.8rem]">Designer, Mumbai</span></div>
            </div>
          </div>

          <div className="p-[40px] border-l-[4px] border-black testimonial">
            <div className="italic text-[0.9rem] text-black font-semibold mb-[20px]">“Finally, a health app that feels like it understands me. Having multiple coach personas makes it so much more personalised and motivating.”</div>
            <div className="flex items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-gray-200 mr-[15px] user-photo" />
              <div className="user-info"><strong className="block text-black text-[0.95rem]">Mike</strong><span className="text-black/60 font-semibold text-[0.8rem]">Marketing Lead, Delhi</span></div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonial
