import {Just_Another_Hand, Teko, Bahianita} from 'next/font/google'

const justAnotherHand = Just_Another_Hand({
    subsets: ['latin'],
    weight: "400",
    variable: "--font-justAnotherHand"
})

const teko = Teko({
    subsets: ['latin'],
    weight: "400",
    variable: "--font-teko"
})

const bahianita = Bahianita({
    subsets: ['latin'],
    weight: "400",
    variable: "--font-bahianita"
})
export {justAnotherHand, teko, bahianita}