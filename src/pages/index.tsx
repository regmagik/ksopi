import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
		<h1>Kangal Mortgage</h1>
		<i>Experience the power of choice with our personalized mortgage & loan options.</i>
 		<p>Welcome to Kangal Mortgage brokerage, where we pride ourselves on providing exceptional service and expertise in mortgage lending. </p>
		<div className={styles.centerX}><Image
            className={styles.logo}
            src="/ks2.jpg" alt="Kangal Logo"
            width={300} height={300}
            priority
          /></div>
		  
		  <p>Our founder, Kateryna Sopizhenko, brings a wealth of experience and knowledge. She is a certified real estate and mortgage broker with a Bachelor&apos;s degree in Business, Finance, Risk Management & Insurance, and she has an extensive experience as a mortgage loan originator and a realtor in both commercial and residential markets.
</p>
<p>In addition to her extensive experience, Kateryna is a Certified QuickBooks Specialist, a Notary Public with over five years of experience, and has recently earned a Credit Repair Certification. With her broad skillset and experience, Kateryna is committed to helping our clients achieve their financial goals and secure the best mortgage solutions to meet their unique needs.
</p>

<h2>About Kangal</h2>
 		<p>Kangal Mortgage is an Atlanta-based mortgage brokerage firm that provides expert guidance to clients seeking financing solutions for their home or investment property. Our founder and lead mortgage broker, Kateryna Sopizhenko, has over four years of experience as a mortgage loan originator and over five years as a realtor/associate broker. Kateryna is also a public notary, Credit Repair certified, certified QuickBooks specialist, fluent in Ukrainian, English, and other languages. 
		</p><p>Kangal Mortgage provides clients with access to competitive rates and flexible terms. We offer a personalized approach to each client&apos;s unique financial situation. We aim to help clients achieve their financial goals by finding the right financing solution, whether a lower monthly payment, reduced interest rate, or access to additional financing.
		</p><p>At Kangal Mortgage, we pride ourselves on delivering exceptional service and expert guidance to every client. We are committed to making the mortgage process as easy and stress-free as possible, providing clients with the best possible outcome. Contact us today to learn how we can help you achieve your financial goals.
</p>
<p>Our brokerage understands that navigating the mortgage market can be complex and overwhelming, so we offer personalized and comprehensive services to guide our clients through the process. Whether you are a first-time homebuyer or a seasoned real estate investor, we provide the guidance and expertise to help you make informed decisions and secure the best possible mortgage solutions. Contact us today to schedule a consultation and take the first step toward achieving your financial goals.
</p> 
<h2>Resources</h2>

<div className={styles.grid}>
          <a
            href="https://www.mortgagecalculator.org/calculators/buy-vs-rent-calculator.php"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
			Rent or Buy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
			Should I rent or buy?
            </p>
          </a>

          <a
            href="https://www.mortgagecalculator.org/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
			Buyer Tools <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
			Mortgage Calculator
            </p>
          </a>

          <a
            href="https://www.mortgagecalculator.org/calculators/should-i-refinance.php"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
			Refinance <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
			Should I refinance?
            </p>
          </a>

          <a
            href="https://www.zillow.com/mortgage-rates/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
			Mortgage Rates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
			What are Today&apos;s Rates at Zillow?
            </p>
          </a>
		  </div>

      </main>
    </>
  )
}
