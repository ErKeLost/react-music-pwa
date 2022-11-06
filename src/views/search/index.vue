<template>
  <div>
    <MainSection title="Search" :loading="loading">
      <Head>
        <Title>Search</Title>
      </Head>

      <TweetListFeed :tweets="searchTweets" />
    </MainSection>
  </div>
</template>
<script setup></script>
