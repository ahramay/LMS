import React from 'react'

const FeedbackCard = () => {
  return (
    <div className="max-w-lg mx-auto border px-6 py-4 rounded-lg">
    <div className="flex items-center mb-6">
        <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Avatar" className="w-12 h-12 rounded-full mr-4"/>
        <div>
            <div className="text-lg font-medium text-gray-800">John Doe</div>
            <div className="text-gray-500">2 hours ago</div>
        </div>
    </div>
    <p className="text-lg leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lorem
        nulla. Donec consequat urna a tortor sagittis lobortis.</p>
    
</div>
  )
}

export default FeedbackCard