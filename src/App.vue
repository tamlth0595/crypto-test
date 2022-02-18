<script setup>
</script>

<template>
  <header>
    <div class="container max-w-7xl mx-auto">
      <nav class="flex justify-between items-center py-14">
          <!-- logo -->
          <div class="w-32 md:w-full z-20">
            <img src="./assets/images/logo.svg" alt="website logo" />
          </div>
          <!-- links -->
          <ul id="menu" class="invisible md:visible c-menu">
            <li class="m-12 md:m-0">
              <a href="#" class="c-link font-semibold">Who We Are</a>
            </li>
            <li class="m-12 md:m-0">
              <a href="#" class="c-link font-semibold">Learn And Play</a>
            </li>
            <li class="m-12 md:m-0">
              <a href="#" class="c-link font-semibold">GameFi</a>
            </li>
            <li class="m-12 md:m-0">
              <a href="#" class="c-link font-semibold">DeFiGovernance's</a>
            </li>
            <li class="m-12 md:m-0">
              <a href="#" class="c-link font-semibold">About Us</a>
            </li>
          </ul>
          <!-- menu button -->
          <div class="z-20 md:hidden cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
      </nav>
    </div>
  </header>
  <section class="container max-w-7xl mx-auto">
    <div class="flex items-center">
      <div>
        <p class="font-poppin font-semibold text-7xl">
          Best Crypto Token.
        </p>
        <p class="text-lg leading-7 text-beo-gray mt-5">
          Leverage on any tokens with a protocol trusted with billions for its price execution, super low fees and reliability.
        </p>
        <div class="mt-5">
          <button class="rounded-2xl bg-beo-yellow text-white font-semibold py-4 px-6 mr-3">Buy Tokens Here</button>
          <button class="rounded-2xl border border-white font-semibold text-white py-4 px-6">Watch how it works</button>
        </div>
      </div>
      <div>
        <img src="./assets/images/hompage/wallet.svg"/>
      </div>
    </div>
  </section>
  <section class="container max-w-6xl mx-auto mb-36">
    <div class="flex rounded-3xl bg-beo-section-dark-gray pt-16 pb-20">
      <div class="flex-col px-24">
        <div>
          <img src="./assets/images/hompage/speaker.svg"/>
        </div>
        <div class="mt-5 text-3xl font-semibold font-poppin">
          Who we are?
        </div>
        <div class="mt-5 text-beo-gray font-inter">
          BEP-20 is a community-based network that aims at helping gamers, investors, developers, and other users in making borderless transactions. If there’s a problem that remains an unsolved obstacle for investors, gamers, and developers, it is the Centralized Control of banks and other financial institutions. To overcome this obstacle, we have come forward with an all-encompassing solution: Decentralized Finance (DeFi). 
        </div>
        <div>
          <button class="mt-5 rounded-2xl border border-white font-semibold text-white py-4 px-5">Learn more about Defi</button>
        </div>
      </div>
      <div class="w-4 h-96 bg-beo-divider opacity-10"></div>
      <div class="flex-col px-24">
        <div>
          <img src="./assets/images/hompage/cube.svg"/>
        </div>
        <div class="mt-5 text-3xl font-semibold font-poppin">
          Revolution platform
        </div>
        <div class="mt-5 text-beo-gray font-inter">
          We believe that DeFi will revolutionize finance by making transactions, savings, exchanging funds, borrowing, and lending an easy and feasible process for everyone. We aim at providing a platform where everyone can make these transactional processes in a trustless and permissionless network in a peer-to-peer manner. Our dream is to provide a sustainable and equal platform to everyone, irrespective of their previous financial status.
        </div>
      </div>
    </div>
  </section>
  <section class="container max-w-7xl mx-auto">
    <div class="flex items-center">
      <div>
        <img src="./assets/images/hompage/eliminate.svg"/>
      </div>
      <div class="w-1/2 pl-16">
        <div class="font-poppin font-bold text-5xl leading-snug">
          <p>Eliminating the</p>
          <p class="text-beo-yellow">“Winner takes all”</p>
          <p>mindset is our motto!</p>
        </div>
        <div class="text-beo-gray">
          Backed by blockchain, our initiative has the unwavering capability to eliminate the need for third parties and middlemen. Consequently, it will make the transaction process easy, convenient, flexible, and cheaper. Unlike the centralized financial system, beo-20 provides you with a platform where you can self-bank all your transactions using our DeFi
        </div>
      </div>
    </div>
  </section>
  <section class="bg-beo-section-gray py-20">
    <div class="flex-col text-center">
      <div class="font-poppin font-bold text-5xl leading-snug">
        <p>We Offer</p>
        <p>Blockchain Tools</p>
      </div>
      <div class="mt-5 text-beo-gray text-base">
        <p>To Unify Gamers, Developers, and Investors Under</p>
        <p>a Unanimous and Diverse Platform</p>
      </div>
      <div class="mt-7">
        <div class="flex max-w-6xl mx-auto gap-5">
          <div class="rounded-2xl bg-beo-offer-black w-1/4 h-64">
            <img class="block mx-auto w-1/2 h-full align-middle" src="./assets/images/hompage/dapp.svg" alt="dapp" />
          </div>
          <div class="rounded-2xl bg-beo-offer-black w-1/4 h-64">
            <img class="block mx-auto w-1/2  h-full align-middle" src="./assets/images/hompage/smart_contracts.svg" alt="smart_contracts" />
          </div>
          <div class="rounded-2xl bg-beo-offer-black w-1/4 h-64">
            <img class="block mx-auto w-full  h-full align-middle" src="./assets/images/hompage/geth.svg" alt="geth" />
          </div>
          <div class="rounded-2xl bg-beo-offer-black w-1/4 h-64">
            <img class="block mx-auto w-1/2  h-full align-middle" src="./assets/images/hompage/remix.svg" alt="remix" />
          </div>
        </div>
        <div class="flex max-w-6xl mx-auto gap-5 mt-5">
          <div class="rounded-2xl bg-beo-offer-black w-1/4 h-64 py-14">
            <img class="w-full h-full" src="./assets/images/hompage/solidity.svg" alt="solidity" />
          </div>
          <div class="rounded-2xl bg-beo-offer-black w-1/4 h-64 py-14">
            <img class="w-full h-full" src="./assets/images/hompage/ganache.svg" alt="ganache" />
          </div>
          <div class="rounded-2xl bg-beo-offer-black w-1/4 h-64">
            <img class="block mx-auto w-3/4 h-full align-middle" src="./assets/images/hompage/metamask.svg" alt="metamask" />
          </div>
          <div class="rounded-2xl bg-beo-offer-black w-1/4 h-64">
            <img class="block mx-auto w-1/3 h-full align-middle" src="./assets/images/hompage/truffle.svg" alt="truffle" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="container max-w-7xl mx-auto">
    <div class="flex items-center">
      <div>
        <img src="./assets/images/hompage/learn_to_earn.svg" alt="learn_to_earn">
      </div>
      <div class="flex-col w-1/2 ml-32">
        <p class="font-poppin font-bold text-5xl leading-snug">Learn to Earn</p>
        <p class="font-semibold text-lg leading-tight">Our mission is to facilitate developers with the inevitable opportunity of “Learn to Earn.” </p>
        <p class="text-beo-gray mt-5">BEP-20 has the mission to offer a diverse platform for developers and gamers where they can Learn to Earn. Our Learn to Earn mission will enable gamers and developers to equip themselves with the growing technology, simultaneously making good earnings.</p>
        <p class="text-beo-gray mt-5">BEP-20 community presents all the available facilities for developers to learn new technology trends and make handsome earnings out of them. With equal benefits and power, these users will be able to make borderless transactions and can carry out self-banking through our DeFi system.</p>
      </div>
    </div>
  </section>
  <section class="container max-w-7xl mx-auto">
    <div class="flex items-center">
      <div class="flex-col w-1/2">
        <p class="font-poppin font-semibold text-5xl leading-snug">For gamers, we present a “Play to Earn” Platform</p>
        <p class="text-beo-gray mt-5">Just like the developers, our gamers are not far behind in getting the most out of our services. BEP-20 offers an opportunity for our gamers community a worthwhile option of Play to Earn. </p>
      </div>
      <div>
        <img src="./assets/images/hompage/for_gamers.svg" alt="for_gamers">
      </div>
    </div>
  </section>
  <section class="container max-w-7xl mx-auto pb-32">
    <p class="font-poppin font-semibold text-3xl">BEP-20 will allow users to enjoy the following benefits:</p>
    <div class="flex gap-5 mt-14">
      <div class="w-1/2 p-10 bg-beo-section-dark-gray rounded-2xl">
        <p class="font-poppin font-bold text-xl">Decentralized Exchange (DEx)</p>
        <p class="text-beo-gray leading-6 mt-5">will allow users to smoothly carry out transactions and other financial activities. These include, but are not limited to, exchanging cryptocurrencies, staking, yield farming lending, borrowing, international transactions, etc. </p>
      </div>
      <div class="w-1/2 p-10 bg-beo-section-dark-gray rounded-2xl">
        <p class="font-poppin font-bold text-xl">BEP-20 Play to Earn option</p>
        <p class="text-beo-gray leading-6 mt-5">will allow gamers to play simple games and earn upon completion of set tasks. </p>
      </div>
    </div>
    <div class="flex gap-5 mt-5">
      <div class="w-1/2 p-10 bg-beo-section-dark-gray rounded-2xl">
        <p class="font-poppin font-bold text-xl">BEP-20 has the mission</p>
        <p class="text-beo-gray leading-6 mt-5">mission to make passive income easy, convenient, and achievable for everyone - regardless of their financial background.</p>
      </div>
      <div class="w-1/2 p-10 bg-beo-section-dark-gray rounded-2xl">
        <p class="font-poppin font-bold text-xl">Our Learn to Earn option</p>
        <p class="text-beo-gray leading-6 mt-5">option will facilitate the users to engage in cryptocurrency paid courses - both written and visual. In turn, these users will get paid at the completion of each course or module.</p>
      </div>
    </div>
  </section>
  <section class="bg-beo-section-gray py-20">
    <div class="flex-col text-center">
      <p class="font-poppin font-bold text-5xl leading-snug">BEO-20 User Tokens</p>
      <p class="text-beo-gray leading-snug">Will give the users numberless benefits, including</p>
      <div class="flex max-w-6xl mx-auto mt-28 gap-5 items-end">
        <div class="rounded-2xl bg-beo-offer-black w-1/3 h-60 relative">
          <div class="absolute -top-1/4 left-1/3">
            <img src="./assets/images/hompage/user-1.svg" alt="user">
          </div>
          <div class="absolute top-1/2 left-16 font-poppin">
            Earning NFTs and Collectibles
          </div>
        </div>
        <div class="rounded-2xl bg-beo-offer-black w-1/3 h-60 relative">
          <div class="absolute -top-1/4 left-1/3">
            <img src="./assets/images/hompage/user-2.svg" alt="user">
          </div>
          <div class="absolute top-1/2 left-14 font-poppin w-3/4">
            Participating in DeFi activities like staking, lending, borrowing and transacting etc
          </div>
        </div>
        <div class="rounded-2xl bg-beo-offer-black w-1/3 h-60 relative">
          <div class="absolute -top-1/4 left-1/3">
            <img src="./assets/images/hompage/user-3.svg" alt="user">
          </div>
          <div class="absolute top-1/2 left-14 font-poppin w-3/4">
            Becoming proficient in passive income and building strong net worth
          </div>
        </div>
      </div>
      <div class="mt-24 max-w-5xl mx-auto">
        <div class="py-8 px-10 font-inter font-bold rounded-xl border border-beo-yellow bg-beo-yellow bg-opacity-5">
          <span class="text-beo-yellow">With these unwavering missions in mind</span>
          <span>, we are offering an incredible platform to our users, where they can enjoy, learn, and earn - all at the same time. Missing out this wonderful opportunity is just not an option. </span>
        </div>
      </div>
    </div>
  </section>
  <section class="mt-36 mb-24 max-w-7xl mx-auto">
    <div class="bg-beo-section-dark-gray text-center rounded-2xl py-14">
      <p class="font-poppin font-extrabold text-4xl">Want to know how to market your NFT Collections?</p>
      <p class="mt-3 text-beo-gray">Head over to our blog for best tips</p>
      <button class="mt-10 px-10 py-6 rounded-2xl bg-white font-bold text-beo-offer-black">Want to know</button>
    </div>
  </section>
  <footer class="max-w-7xl mx-auto border-t border-white border-opacity-10">
    <div class="py-12 flex justify-between">
      <div class="flex-col">
        <img src="./assets/images/logo.svg" alt="website logo" />
        <div class="flex gap-2 mt-12">
          <img src="./assets/images/hompage/facebook.svg" alt="facebook">
          <img src="./assets/images/hompage/twitter.svg" alt="twitter">
          <img src="./assets/images/hompage/reddit.svg" alt="reddit">
          <img src="./assets/images/hompage/medium.svg" alt="medium">
          <img src="./assets/images/hompage/discord.svg" alt="discord">
          <img src="./assets/images/hompage/telegram.svg" alt="telegram">
          <img src="./assets/images/hompage/youtube.svg" alt="youtube">
        </div>
      </div>
      <div class="flex gap-20">
        <div class="flex-col">
          <p class="font-poppin font-bold mb-5">Resources</p>
          <p class="text-sm leading-7 c-link">Who We Are</p>
          <p class="text-sm leading-7 c-link">Learn and Play</p>
          <p class="text-sm leading-7 c-link">GameFi</p>
          <p class="text-sm leading-7 c-link">DeFi Governance's</p>
        </div>
        <div class="flex-col">
          <p class="font-poppin font-bold mb-5">Solutions</p>
          <p class="text-sm leading-7 c-link">Decentralized Finance</p>
          <p class="text-sm leading-7 c-link">Security Tokens</p>
          <p class="text-sm leading-7 c-link">SEC-Registred Offerings</p>
          <p class="text-sm leading-7 c-link">About Us</p>
        </div>
        <div class="flex-col">
          <p class="font-poppin font-bold mb-5">Partners</p>
          <p class="text-sm leading-7 c-link">Valued Partners</p>
          <p class="text-sm leading-7 c-link">Grants</p>
          <p class="text-sm leading-7 c-link">Join Us</p>
        </div>
        <div class="flex-col">
          <p class="font-poppin font-bold mb-5">Company</p>
          <p class="text-sm leading-7 c-link">About Us</p>
          <p class="text-sm leading-7 c-link">Leadership</p>
          <p class="text-sm leading-7 c-link">Contact</p>
        </div>
      </div>
    </div>
    <div class="h-px bg-white bg-opacity-10"></div>
    <div class="pt-5 pb-16 flex justify-between text-xs">
      <p>©BEP20 2022</p>
      <div class="flex gap-5">
        <p>Terms of Services</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
#app {
  background-color:#1E252B;
  color: #f9f9f9;
  font-family: 'Inter', sans-serif;
}
.c-menu {
  @apply fixed
  z-20
  top-0
  left-0
  w-full
  h-screen
  flex flex-col
  justify-center
  items-center
  md:h-auto
  md:flex-row
  md:justify-between
  md:static;
}
.c-link {
  @apply
  hover:text-beo-yellow
  leading-loose
  transition
  duration-300
  ease-in;
}
</style>
