'use client'

import { doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { v4 } from 'uuid'
import { auth, db } from '../../../lib/firebase'

const Page = () => {
  const [user, loading] = useAuthState(auth)

  const [message, setMessage] = useState('')
  const createMessage = async (e) => {
    e.preventDefault()
    await setDoc(doc(db, 'contacts', v4()), {
      name: user?.displayName,
      email: user?.email,
      message: message,
    })
    alert('Message Sent')
  }

  return (
    <section class="text-white body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Contact Us
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={createMessage} class="flex flex-wrap -m-2">
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
                  value={message}
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Page
