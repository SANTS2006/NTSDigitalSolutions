import React from 'react'

const ContactInfoCard = ({ info }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center">
        <div className="text-3xl mb-4">
            {info.icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">
            {info.title}
        </h3>
        <p className="mt-2 text-slate-600">
            {info.value}
        </p>
    </div>
  )
}

export default ContactInfoCard
