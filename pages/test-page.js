import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Central Identity Architect</title>
          <meta
            property="og:title"
            content="test-page - Central Identity Architect"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_ji11l6) => (
            <>
              <h1>{context_ji11l6?.Name}</h1>
            </>
          )}
          initialData={props.contextJi11l6Prop}
          persistDataDuringLoading={true}
          key={props?.contextJi11l6Prop?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const contextJi11l6Prop = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        contextJi11l6Prop: contextJi11l6Prop?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
