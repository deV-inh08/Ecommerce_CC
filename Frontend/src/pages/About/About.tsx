import React from 'react'
import about from "../../assets/aboutimage.png"
import img46 from "../../assets/image 46.png"
import img47 from "../../assets/image 47.png"
import img51 from "../../assets/image 51.png"
import Services from '../../components/Services'
import ScrollCounter from '../../components/ScrollCounter'

const About = () => {
  return (
    <div className='container mx-auto mt-36'>
      <section className='grid grid-cols-12'>
        <div className='col-span-5 mt-[137px]'>
          <h3 className='font-bold text-5xl'>Our Story</h3>
          <p className='mt-7 leading-7'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p className='mt-7 leading-7'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className='col-span-7 ml-auto'>
          <img src={about} alt="About" />
        </div>
      </section>
      <article className='grid grid-cols-12 mt-[140px] mx-auto gap-10'>
        <div className='col-span-3 h-[300px] border flex flex-col justify-center items-center gap-4 hover:bg-primaryColor hover:text-white transition-all duration-700'>
          <div className='bg-black  w-[60px] h-[60px] rounded-full flex justify-center items-center'>
            <svg width={35} height={32} viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group">
                <path id="Vector" d="M31.6416 1H24.9883L25.8216 9.33333C25.8216 9.33333 27.4883 11 29.9883 11C31.3006 11.0017 32.5684 10.524 33.5533 9.65667C33.6574 9.55938 33.735 9.43716 33.7787 9.30156C33.8224 9.16596 33.8309 9.02145 33.8033 8.88167L32.6266 1.83333C32.5873 1.60049 32.4668 1.38909 32.2865 1.23656C32.1062 1.08404 31.8778 1.00024 31.6416 1V1Z" stroke="white" strokeWidth={2} />
                <path id="Vector_2" d="M24.9883 1L25.8216 9.33333C25.8216 9.33333 24.1549 11 21.6549 11C19.1549 11 17.4883 9.33333 17.4883 9.33333V1H24.9883Z" stroke="#FAFAFA" strokeWidth={2} />
                <path id="Vector_3" d="M17.4886 1V9.33333C17.4886 9.33333 15.8219 11 13.3219 11C10.8219 11 9.15527 9.33333 9.15527 9.33333L9.98861 1H17.4886Z" stroke="#FAFAFA" strokeWidth={2} />
                <path id="Vector_4" d="M9.98827 1H3.3366C3.09993 0.999912 2.87089 1.08377 2.69023 1.23666C2.50957 1.38955 2.38899 1.60157 2.34994 1.835L1.17494 8.88333C1.14747 9.02311 1.15601 9.16758 1.19974 9.30315C1.24348 9.43873 1.32097 9.56095 1.42494 9.65833C1.9716 10.1417 3.19327 11.0017 4.98827 11.0017C7.48827 11.0017 9.15494 9.335 9.15494 9.335L9.98827 1.00167V1Z" stroke="#FAFAFA" strokeWidth={2} />
                <path id="Vector_5" d="M2.5 11V27.6667C2.5 28.5507 2.85119 29.3986 3.47631 30.0237C4.10143 30.6488 4.94928 31 5.83333 31H29.1667C30.0507 31 30.8986 30.6488 31.5237 30.0237C32.1488 29.3986 32.5 28.5507 32.5 27.6667V11" stroke="#FAFAFA" strokeWidth={2} />
                <path id="Vector_6" d="M22.2217 31V21C22.2217 20.1159 21.8705 19.2681 21.2454 18.6429C20.6202 18.0178 19.7724 17.6666 18.8883 17.6666H15.555C14.671 17.6666 13.8231 18.0178 13.198 18.6429C12.5729 19.2681 12.2217 20.1159 12.2217 21V31" stroke="#FAFAFA" strokeWidth={2} strokeMiterlimit={16} />
              </g>
            </svg>
          </div>
          <ScrollCounter start={0} end={10.5}></ScrollCounter>
          <p className=''>Sallers active our site</p>
        </div>
        <div className='col-span-3 h-[300px] border flex flex-col justify-center items-center gap-4 hover:bg-primaryColor hover:text-white transition-all duration-700'>
          <div className='bg-black w-[60px] h-[60px] rounded-full flex justify-center items-center'>
            <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Icon-Shopping bag">
                <path id="Vector" d="M11.667 11.6667V8.33339C11.667 7.36818 11.9464 6.42362 12.4714 5.6137C12.9965 4.80379 13.7447 4.16315 14.6258 3.76912C15.5069 3.37509 16.4832 3.24451 17.4369 3.39313C18.3906 3.54176 19.2809 3.96325 20.0003 4.60672C20.7197 3.96325 21.61 3.54176 22.5637 3.39313C23.5174 3.24451 24.4937 3.37509 25.3748 3.76912C26.256 4.16315 27.0042 4.80379 27.5292 5.6137C28.0543 6.42362 28.3336 7.36818 28.3337 8.33339V11.6667H30.8337C31.4967 11.6667 32.1326 11.9301 32.6014 12.399C33.0703 12.8678 33.3337 13.5037 33.3337 14.1667V30.8417C33.3337 32.3866 32.72 33.8682 31.6276 34.9606C30.5352 36.053 29.0535 36.6667 27.5087 36.6667H13.3337C11.5655 36.6667 9.86986 35.9643 8.61961 34.7141C7.36937 33.4639 6.66699 31.7682 6.66699 30.0001V14.1667C6.66699 13.5037 6.93038 12.8678 7.39922 12.399C7.86807 11.9301 8.50395 11.6667 9.16699 11.6667H11.667ZM22.7253 34.1667C22.0454 33.1914 21.6818 32.0306 21.6837 30.8417V14.1667H9.16699V30.0001C9.16699 30.5472 9.27477 31.089 9.48416 31.5946C9.69356 32.1001 10.0005 32.5594 10.3874 32.9463C10.7743 33.3332 11.2336 33.6402 11.7391 33.8496C12.2447 34.0589 12.7865 34.1667 13.3337 34.1667H22.7253ZM19.167 11.6667V8.33339C19.167 7.67035 18.9036 7.03446 18.4348 6.56562C17.9659 6.09678 17.33 5.83339 16.667 5.83339C16.004 5.83339 15.3681 6.09678 14.8992 6.56562C14.4304 7.03446 14.167 7.67035 14.167 8.33339V11.6667H19.167ZM21.667 11.6667H25.8337V8.33339C25.8337 7.81878 25.6749 7.31669 25.379 6.89566C25.0832 6.47463 24.6645 6.15517 24.1803 5.98089C23.6961 5.8066 23.1699 5.78599 22.6736 5.92186C22.1772 6.05773 21.7349 6.34346 21.407 6.74005C21.5753 7.24005 21.667 7.77672 21.667 8.33339V11.6667ZM24.1837 30.8417C24.1837 31.7236 24.534 32.5693 25.1575 33.1929C25.7811 33.8164 26.6268 34.1667 27.5087 34.1667C28.3905 34.1667 29.2362 33.8164 29.8598 33.1929C30.4833 32.5693 30.8337 31.7236 30.8337 30.8417V14.1667H24.1837V30.8417Z" fill="white" />
              </g>
            </svg>
          </div>
          <ScrollCounter start={0} end={33}></ScrollCounter>
          <p className=''>Mopnthly Produduct Sale</p>
        </div>
        <div className='col-span-3 h-[300px] border flex flex-col justify-center items-center gap-4 hover:bg-primaryColor hover:text-white transition-all duration-700'>
          <div className='bg-black w-[60px] h-[60px] rounded-full flex justify-center items-center'>
            <svg width={41} height={40} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="icon-delivery" clipPath="url(#clip0_811_335)">
                <path id="Vector" d="M12.1667 31.6667C14.0076 31.6667 15.5 30.1743 15.5 28.3333C15.5 26.4924 14.0076 25 12.1667 25C10.3257 25 8.83334 26.4924 8.83334 28.3333C8.83334 30.1743 10.3257 31.6667 12.1667 31.6667Z" stroke="#FAFAFA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_2" d="M28.8333 31.6667C30.6743 31.6667 32.1667 30.1743 32.1667 28.3333C32.1667 26.4924 30.6743 25 28.8333 25C26.9924 25 25.5 26.4924 25.5 28.3333C25.5 30.1743 26.9924 31.6667 28.8333 31.6667Z" stroke="#FAFAFA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_3" d="M8.83331 28.3335H7.49998C6.39541 28.3335 5.49998 27.4381 5.49998 26.3335V21.6668M3.83331 8.3335H20.1666C21.2712 8.3335 22.1666 9.22893 22.1666 10.3335V28.3335M15.5 28.3335H25.5M32.1667 28.3335H33.5C34.6046 28.3335 35.5 27.4381 35.5 26.3335V18.3335M35.5 18.3335H22.1666M35.5 18.3335L31.0826 10.9712C30.7211 10.3688 30.0701 10.0002 29.3676 10.0002H22.1666" stroke="#FAFAFA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_4" d="M8.5 28H7.16667C6.0621 28 5.16667 27.1046 5.16667 26V21.3333M3.5 8H19.8333C20.9379 8 21.8333 8.89543 21.8333 10V28M15.5 28H25.1667M32.5 28H33.1667C34.2712 28 35.1667 27.1046 35.1667 26V18M35.1667 18H21.8333M35.1667 18L30.7493 10.6377C30.3878 10.0353 29.7368 9.66667 29.0343 9.66667H21.8333" stroke="#FAFAFA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_5" d="M5.5 11.8184H12.1667" stroke="#FAFAFA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_6" d="M2.31818 15.4546H8.98484" stroke="#FAFAFA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path id="Vector_7" d="M5.5 19.0908H12.1667" stroke="#FAFAFA" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_811_335">
                  <rect width={40} height={40} fill="white" transform="translate(0.5)" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <ScrollCounter start={0} end={45.5}></ScrollCounter>
          <p className=''>Customer active in our site</p>
        </div>
        <div className='col-span-3 h-[300px] border flex flex-col justify-center items-center gap-4 hover:bg-primaryColor hover:text-white transition-all duration-700'>
          <div className='bg-black w-[60px] h-[60px] rounded-full flex justify-center items-center'>
            <svg width={31} height={34} viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group">
                <path id="Vector" d="M15.9278 15.1456V15.6456L16.4278 15.6456C17.0916 15.6457 17.739 15.8514 18.281 16.2346C18.8229 16.6178 19.2327 17.1595 19.454 17.7851C19.4727 17.8381 19.4808 17.8941 19.4778 17.9502C19.4748 18.0062 19.4608 18.0611 19.4366 18.1117C19.4124 18.1624 19.3784 18.2077 19.3367 18.2452C19.295 18.2828 19.2463 18.3117 19.1933 18.3304C19.1404 18.3491 19.0844 18.3571 19.0283 18.3542C18.9723 18.3512 18.9174 18.3372 18.8667 18.313C18.7645 18.2641 18.6858 18.1766 18.6481 18.0697L18.648 18.0695C18.4856 17.6104 18.1849 17.213 17.7873 16.9319C17.3896 16.6509 16.9146 16.5 16.4277 16.5002L15.9278 16.5003V17.0002V20.7092V21.2092H16.4278C17.2789 21.2092 18.0952 21.5473 18.697 22.1491C19.2988 22.7509 19.6369 23.5672 19.6369 24.4183C19.6369 25.2694 19.2988 26.0856 18.697 26.6874C18.0952 27.2892 17.2789 27.6273 16.4278 27.6273H15.9278V28.1273V28.5546H15.0733V28.1273V27.6273L14.5733 27.6273C13.9096 27.6273 13.2621 27.4215 12.7202 27.0383C12.1782 26.6551 11.7684 26.1134 11.5471 25.4876L11.5472 25.4875L11.5422 25.4744C11.5216 25.4211 11.512 25.3642 11.5138 25.3071C11.5156 25.25 11.5289 25.1939 11.5528 25.142C11.5767 25.0901 11.6107 25.0435 11.6529 25.005L11.317 24.6367L11.6529 25.005C11.6952 24.9665 11.7447 24.9369 11.7985 24.9179C11.8524 24.8988 11.9095 24.8908 11.9665 24.8942C12.0236 24.8977 12.0793 24.9125 12.1305 24.9379C12.1817 24.9632 12.2273 24.9986 12.2646 25.0419C12.3019 25.0852 12.3301 25.1355 12.3476 25.1899L12.3499 25.1969L12.3523 25.2039C12.6768 26.1186 13.5484 26.7728 14.5733 26.7728H15.0733V26.2728V22.5637V22.0637H14.5733C13.7222 22.0637 12.906 21.7256 12.3042 21.1238C11.7024 20.522 11.3643 19.7058 11.3643 18.8547C11.3643 18.0036 11.7024 17.1874 12.3042 16.5856C12.906 15.9837 13.7222 15.6456 14.5733 15.6456H15.0733V15.1456V14.7184H15.9278V15.1456ZM15.0733 17.0002V16.5002H14.5733C13.9488 16.5002 13.35 16.7482 12.9084 17.1898C12.4668 17.6314 12.2188 18.2302 12.2188 18.8547C12.2188 19.4792 12.4668 20.078 12.9084 20.5196C13.35 20.9612 13.9488 21.2092 14.5733 21.2092H15.0733V20.7092V17.0002ZM15.9278 26.2728V26.7728H16.4278C17.0523 26.7728 17.6512 26.5247 18.0927 26.0832C18.5343 25.6416 18.7824 25.0427 18.7824 24.4183C18.7824 23.7938 18.5343 23.1949 18.0927 22.7534C17.6512 22.3118 17.0523 22.0637 16.4278 22.0637H15.9278V22.5637V26.2728Z" fill="#FAFAFA" stroke="#FAFAFA" />
                <path id="Vector_2" d="M8.20572 9.57769L8.5219 9.69983C12.8707 11.3798 18.1083 11.3797 22.457 9.69804L22.7695 9.5772L23.0001 9.82027C24.8981 11.8211 26.4858 14.0948 27.7105 16.5658L27.7115 16.5677C28.9873 19.1703 29.7037 21.8133 29.5867 24.1301L29.5867 24.1301C29.4723 26.3912 28.5716 28.3572 26.5218 29.806L26.5218 29.806C24.4129 31.296 20.9467 32.3336 15.5354 32.3336C10.1198 32.3336 6.63966 31.3141 4.51316 29.8421L4.51293 29.842C2.44943 28.412 1.53763 26.472 1.41014 24.2374L8.20572 9.57769ZM8.20572 9.57769L7.97519 9.82617M8.20572 9.57769L7.97519 9.82617M7.97519 9.82617C6.15729 11.7856 4.46566 14.1897 3.25095 16.6929L3.25091 16.6929M7.97519 9.82617L3.25091 16.6929M3.25091 16.6929C1.98037 19.3123 1.2784 21.9432 1.41013 24.2372L3.25091 16.6929ZM25.3428 3.18136C25.7832 3.39921 26.1642 3.60759 26.4775 3.79428L23.3457 8.3725L23.1141 8.71114L23.401 9.00444C25.3394 10.9861 27.1697 13.5163 28.4805 16.1919C29.7935 18.8721 30.5679 21.6624 30.441 24.1735C30.3151 26.6637 29.3054 28.8863 27.0163 30.5035C24.7051 32.1363 21.0382 33.1881 15.5364 33.1881C10.0332 33.1881 6.35436 32.1551 4.02802 30.5441C1.72448 28.9489 0.699103 26.7543 0.558033 24.2856C0.415712 21.7951 1.17576 19.0153 2.48354 16.3201C3.7889 13.6299 5.62285 11.0598 7.58124 8.99926L7.85891 8.70711L7.63235 8.37375L4.52247 3.79791C4.67984 3.70521 4.8536 3.60746 5.04301 3.50656L5.04302 3.50656L5.04474 3.50564C5.23531 3.40316 5.44085 3.29767 5.66136 3.19013L5.85727 3.09458C8.10344 2.02401 11.6645 0.809448 15.5364 0.809448C19.4384 0.809448 22.9975 2.04283 25.2165 3.12005C25.2165 3.12005 25.2165 3.12005 25.2165 3.12006L25.3412 3.18057C25.3417 3.18083 25.3422 3.1811 25.3428 3.18136ZM21.7245 9.05917L21.8779 9.00466L21.9698 8.87033L24.7117 4.86178L25.2968 4.00635L24.2631 4.08078C21.6696 4.26751 18.6003 4.87479 15.6554 5.7274C13.6714 6.30056 11.4387 6.21929 9.33386 5.83106C8.80462 5.73294 8.27901 5.61613 7.75803 5.48086L6.47261 5.14712L7.21875 6.24574L8.99909 8.86711L9.09097 9.00238L9.24502 9.05723C13.1692 10.4543 17.7996 10.4542 21.7245 9.05917ZM7.08002 3.48035L5.80043 4.02347L7.1328 4.41985C7.88966 4.64501 8.68211 4.84132 9.48767 4.99046L9.48813 4.99055C11.523 5.36535 13.6079 5.42979 15.4168 4.90582L15.4175 4.90561C17.3859 4.33216 19.388 3.88116 21.4122 3.5552L21.4768 2.58279C19.7353 2.05845 17.6905 1.66397 15.5354 1.66397C12.2536 1.66397 9.20629 2.57787 7.08002 3.48035Z" fill="#FAFAFA" stroke="#FAFAFA" />
              </g>
            </svg>

          </div>
          <ScrollCounter start={0} end={25}></ScrollCounter>

          <p className=''>Anual gross sale in our site</p>
        </div>
      </article>
      <article className='grid grid-cols-12 mt-[140px] gap-11'>
        <div className='col-span-4 h-[564px] px-16 flex flex-col'>
          <div>
            <img src={img46} alt="Avatar" />
          </div>
          <h4 className='text-3xl mt-8'>Tom Cruise</h4>
          <p className='mt-2'>Founder & Chairman</p>
          <div className='flex gap-4 mt-3 items-center'>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Icon-Linkedin">
                <path id="Vector" d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z" fill="black" />
              </g>
            </svg>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group">
                <path id="Vector" d="M15 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V15C1 16.0609 1.42143 17.0783 2.17157 17.8284C2.92172 18.5786 3.93913 19 5 19H15C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15V5C19 3.93913 18.5786 2.92172 17.8284 2.17157C17.0783 1.42143 16.0609 1 15 1Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                <path id="Vector_2" d="M10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14V14Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                <path id="Vector_3" d="M15.5 5.5C15.7652 5.5 16.0196 5.39464 16.2071 5.20711C16.3946 5.01957 16.5 4.76522 16.5 4.5C16.5 4.23478 16.3946 3.98043 16.2071 3.79289C16.0196 3.60536 15.7652 3.5 15.5 3.5C15.2348 3.5 14.9804 3.60536 14.7929 3.79289C14.6054 3.98043 14.5 4.23478 14.5 4.5C14.5 4.76522 14.6054 5.01957 14.7929 5.20711C14.9804 5.39464 15.2348 5.5 15.5 5.5Z" fill="black" />
              </g>
            </svg>
            <svg width={23} height={24} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group">
                <path id="Vector" d="M12.905 8.84651L12.905 8.84646C12.9194 8.06035 13.2418 7.3113 13.8028 6.76049C14.3639 6.20969 15.1188 5.90116 15.905 5.90129L12.905 8.84651ZM12.905 8.84651L12.877 10.4213M12.905 8.84651L12.877 10.4213M4.75811 7.80857L4.89001 7.91846C6.76679 9.48211 8.71781 10.4182 10.7495 10.6952C10.7495 10.6952 10.7495 10.6952 10.7495 10.6952L12.3104 10.9072L4.75811 7.80857ZM4.75811 7.80857L4.72759 7.97751M4.75811 7.80857L4.72759 7.97751M4.72759 7.97751C4.42576 9.64819 4.5683 11.0709 5.1479 12.3018C5.72718 13.532 6.73827 14.5605 8.15577 15.4519L8.15579 15.452M4.72759 7.97751L8.15579 15.452M8.15579 15.452L9.90279 16.55L9.954 16.4685M8.15579 15.452L9.954 16.4685M9.954 16.4685L9.90279 16.55C9.97196 16.5934 10.0294 16.6532 10.0702 16.724C10.1109 16.7948 10.1337 16.8745 10.1365 16.9562C10.1392 17.0378 10.122 17.1189 10.0862 17.1924C10.0504 17.2658 9.99716 17.3294 9.93112 17.3775L9.93101 17.3775M9.954 16.4685L9.93101 17.3775M9.93101 17.3775L8.33901 18.5405L8.11542 18.7039M9.93101 17.3775L8.11542 18.7039M8.11542 18.7039L8.39178 18.7211M8.11542 18.7039L8.39178 18.7211M8.39178 18.7211C9.3449 18.7805 10.2529 18.7385 11.0095 18.5884L11.0096 18.5884M8.39178 18.7211L11.0096 18.5884M11.0096 18.5884C13.3886 18.1134 15.3745 16.9794 16.7652 15.2211M11.0096 18.5884L16.7652 15.2211M12.877 10.4213C12.8757 10.4918 12.8594 10.5612 12.8293 10.625C12.7993 10.6887 12.7561 10.7454 12.7026 10.7912C12.649 10.8371 12.5864 10.8712 12.5188 10.8911C12.4513 10.9111 12.3803 10.9166 12.3105 10.9072L12.877 10.4213ZM16.7652 15.2211C18.1557 13.463 18.945 11.0883 18.945 8.14229M16.7652 15.2211L18.945 8.14229M18.945 8.14229C18.945 7.99668 18.8714 7.78474 18.744 7.55722M18.945 8.14229L18.744 7.55722M18.744 7.55722C18.6142 7.32559 18.4215 7.06508 18.1673 6.82049M18.744 7.55722L18.1673 6.82049M18.1673 6.82049C17.6587 6.33088 16.8999 5.90129 15.905 5.90129L18.1673 6.82049ZM20.4978 5.53842C20.8818 5.48388 21.3285 5.34345 21.916 5.01105C21.6101 6.49526 21.4321 7.16764 20.7642 8.08336L20.745 8.10969V8.14229C20.745 11.9415 19.578 14.7567 17.8258 16.7397C16.0726 18.7238 13.7277 19.8813 11.3624 20.3532C9.74529 20.6759 7.7544 20.5728 5.99643 20.2106C5.11813 20.0296 4.30077 19.7846 3.61983 19.4974C3.03727 19.2517 2.56009 18.9775 2.22956 18.6904C2.66065 18.6482 3.4114 18.5535 4.24366 18.3598C5.24355 18.1272 6.37173 17.7494 7.20306 17.141L7.31918 17.056L7.19904 16.9768C7.15724 16.9492 7.11178 16.9196 7.06301 16.8879C6.30477 16.3938 4.74648 15.3786 3.73155 13.5166C2.66714 11.5637 2.19257 8.66295 3.91362 4.42592C5.57889 6.34347 7.2726 7.66001 8.99504 8.3668L8.99505 8.36681C9.57662 8.60536 9.94255 8.72373 10.2318 8.79141C10.4509 8.84265 10.6261 8.86463 10.8117 8.88794C10.8703 8.89529 10.93 8.90278 10.9924 8.91135L11.2872 8.95189L11.1059 8.77077C11.131 7.8414 11.4254 6.93895 11.9539 6.17331C12.4904 5.39606 13.2442 4.79434 14.1211 4.4435C14.9979 4.09265 15.9588 4.00828 16.8833 4.20093C17.8079 4.39359 18.6551 4.85471 19.3189 5.52657L19.3485 5.55658L19.3907 5.55628C19.4934 5.55556 19.5972 5.55908 19.7036 5.56269C19.9483 5.57098 20.2068 5.57974 20.4978 5.53842Z" fill="black" stroke="white" strokeWidth="0.2" />
              </g>
            </svg>
          </div>
        </div>
       
        <div className='col-span-4 h-[564px] px-16 flex flex-col'>
          <div>
            <img src={img51} alt="Avatar" />
          </div>
          <h4 className='text-3xl mt-8'>Emma Watson</h4>
          <p className='mt-2'>Managing Director</p>
          <div className='flex gap-4 mt-3 items-center'>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Icon-Linkedin">
                <path id="Vector" d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z" fill="black" />
              </g>
            </svg>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group">
                <path id="Vector" d="M15 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V15C1 16.0609 1.42143 17.0783 2.17157 17.8284C2.92172 18.5786 3.93913 19 5 19H15C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15V5C19 3.93913 18.5786 2.92172 17.8284 2.17157C17.0783 1.42143 16.0609 1 15 1Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                <path id="Vector_2" d="M10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14V14Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                <path id="Vector_3" d="M15.5 5.5C15.7652 5.5 16.0196 5.39464 16.2071 5.20711C16.3946 5.01957 16.5 4.76522 16.5 4.5C16.5 4.23478 16.3946 3.98043 16.2071 3.79289C16.0196 3.60536 15.7652 3.5 15.5 3.5C15.2348 3.5 14.9804 3.60536 14.7929 3.79289C14.6054 3.98043 14.5 4.23478 14.5 4.5C14.5 4.76522 14.6054 5.01957 14.7929 5.20711C14.9804 5.39464 15.2348 5.5 15.5 5.5Z" fill="black" />
              </g>
            </svg>
            <svg width={23} height={24} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group">
                <path id="Vector" d="M12.905 8.84651L12.905 8.84646C12.9194 8.06035 13.2418 7.3113 13.8028 6.76049C14.3639 6.20969 15.1188 5.90116 15.905 5.90129L12.905 8.84651ZM12.905 8.84651L12.877 10.4213M12.905 8.84651L12.877 10.4213M4.75811 7.80857L4.89001 7.91846C6.76679 9.48211 8.71781 10.4182 10.7495 10.6952C10.7495 10.6952 10.7495 10.6952 10.7495 10.6952L12.3104 10.9072L4.75811 7.80857ZM4.75811 7.80857L4.72759 7.97751M4.75811 7.80857L4.72759 7.97751M4.72759 7.97751C4.42576 9.64819 4.5683 11.0709 5.1479 12.3018C5.72718 13.532 6.73827 14.5605 8.15577 15.4519L8.15579 15.452M4.72759 7.97751L8.15579 15.452M8.15579 15.452L9.90279 16.55L9.954 16.4685M8.15579 15.452L9.954 16.4685M9.954 16.4685L9.90279 16.55C9.97196 16.5934 10.0294 16.6532 10.0702 16.724C10.1109 16.7948 10.1337 16.8745 10.1365 16.9562C10.1392 17.0378 10.122 17.1189 10.0862 17.1924C10.0504 17.2658 9.99716 17.3294 9.93112 17.3775L9.93101 17.3775M9.954 16.4685L9.93101 17.3775M9.93101 17.3775L8.33901 18.5405L8.11542 18.7039M9.93101 17.3775L8.11542 18.7039M8.11542 18.7039L8.39178 18.7211M8.11542 18.7039L8.39178 18.7211M8.39178 18.7211C9.3449 18.7805 10.2529 18.7385 11.0095 18.5884L11.0096 18.5884M8.39178 18.7211L11.0096 18.5884M11.0096 18.5884C13.3886 18.1134 15.3745 16.9794 16.7652 15.2211M11.0096 18.5884L16.7652 15.2211M12.877 10.4213C12.8757 10.4918 12.8594 10.5612 12.8293 10.625C12.7993 10.6887 12.7561 10.7454 12.7026 10.7912C12.649 10.8371 12.5864 10.8712 12.5188 10.8911C12.4513 10.9111 12.3803 10.9166 12.3105 10.9072L12.877 10.4213ZM16.7652 15.2211C18.1557 13.463 18.945 11.0883 18.945 8.14229M16.7652 15.2211L18.945 8.14229M18.945 8.14229C18.945 7.99668 18.8714 7.78474 18.744 7.55722M18.945 8.14229L18.744 7.55722M18.744 7.55722C18.6142 7.32559 18.4215 7.06508 18.1673 6.82049M18.744 7.55722L18.1673 6.82049M18.1673 6.82049C17.6587 6.33088 16.8999 5.90129 15.905 5.90129L18.1673 6.82049ZM20.4978 5.53842C20.8818 5.48388 21.3285 5.34345 21.916 5.01105C21.6101 6.49526 21.4321 7.16764 20.7642 8.08336L20.745 8.10969V8.14229C20.745 11.9415 19.578 14.7567 17.8258 16.7397C16.0726 18.7238 13.7277 19.8813 11.3624 20.3532C9.74529 20.6759 7.7544 20.5728 5.99643 20.2106C5.11813 20.0296 4.30077 19.7846 3.61983 19.4974C3.03727 19.2517 2.56009 18.9775 2.22956 18.6904C2.66065 18.6482 3.4114 18.5535 4.24366 18.3598C5.24355 18.1272 6.37173 17.7494 7.20306 17.141L7.31918 17.056L7.19904 16.9768C7.15724 16.9492 7.11178 16.9196 7.06301 16.8879C6.30477 16.3938 4.74648 15.3786 3.73155 13.5166C2.66714 11.5637 2.19257 8.66295 3.91362 4.42592C5.57889 6.34347 7.2726 7.66001 8.99504 8.3668L8.99505 8.36681C9.57662 8.60536 9.94255 8.72373 10.2318 8.79141C10.4509 8.84265 10.6261 8.86463 10.8117 8.88794C10.8703 8.89529 10.93 8.90278 10.9924 8.91135L11.2872 8.95189L11.1059 8.77077C11.131 7.8414 11.4254 6.93895 11.9539 6.17331C12.4904 5.39606 13.2442 4.79434 14.1211 4.4435C14.9979 4.09265 15.9588 4.00828 16.8833 4.20093C17.8079 4.39359 18.6551 4.85471 19.3189 5.52657L19.3485 5.55658L19.3907 5.55628C19.4934 5.55556 19.5972 5.55908 19.7036 5.56269C19.9483 5.57098 20.2068 5.57974 20.4978 5.53842Z" fill="black" stroke="white" strokeWidth="0.2" />
              </g>
            </svg>
          </div>
        </div>
        <div className='col-span-4 h-[564px] px-16 flex flex-col'>
          <div>
            <img src={img47} alt="Avatar" />
          </div>
          <h4 className='text-3xl mt-8'>Will Smith</h4>
          <p className='mt-2'>Product Designer</p>
          <div className='flex gap-4 mt-3 items-center'>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Icon-Linkedin">
                <path id="Vector" d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z" fill="black" />
              </g>
            </svg>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group">
                <path id="Vector" d="M15 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V15C1 16.0609 1.42143 17.0783 2.17157 17.8284C2.92172 18.5786 3.93913 19 5 19H15C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15V5C19 3.93913 18.5786 2.92172 17.8284 2.17157C17.0783 1.42143 16.0609 1 15 1Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                <path id="Vector_2" d="M10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14V14Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                <path id="Vector_3" d="M15.5 5.5C15.7652 5.5 16.0196 5.39464 16.2071 5.20711C16.3946 5.01957 16.5 4.76522 16.5 4.5C16.5 4.23478 16.3946 3.98043 16.2071 3.79289C16.0196 3.60536 15.7652 3.5 15.5 3.5C15.2348 3.5 14.9804 3.60536 14.7929 3.79289C14.6054 3.98043 14.5 4.23478 14.5 4.5C14.5 4.76522 14.6054 5.01957 14.7929 5.20711C14.9804 5.39464 15.2348 5.5 15.5 5.5Z" fill="black" />
              </g>
            </svg>
            <svg width={23} height={24} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group">
                <path id="Vector" d="M12.905 8.84651L12.905 8.84646C12.9194 8.06035 13.2418 7.3113 13.8028 6.76049C14.3639 6.20969 15.1188 5.90116 15.905 5.90129L12.905 8.84651ZM12.905 8.84651L12.877 10.4213M12.905 8.84651L12.877 10.4213M4.75811 7.80857L4.89001 7.91846C6.76679 9.48211 8.71781 10.4182 10.7495 10.6952C10.7495 10.6952 10.7495 10.6952 10.7495 10.6952L12.3104 10.9072L4.75811 7.80857ZM4.75811 7.80857L4.72759 7.97751M4.75811 7.80857L4.72759 7.97751M4.72759 7.97751C4.42576 9.64819 4.5683 11.0709 5.1479 12.3018C5.72718 13.532 6.73827 14.5605 8.15577 15.4519L8.15579 15.452M4.72759 7.97751L8.15579 15.452M8.15579 15.452L9.90279 16.55L9.954 16.4685M8.15579 15.452L9.954 16.4685M9.954 16.4685L9.90279 16.55C9.97196 16.5934 10.0294 16.6532 10.0702 16.724C10.1109 16.7948 10.1337 16.8745 10.1365 16.9562C10.1392 17.0378 10.122 17.1189 10.0862 17.1924C10.0504 17.2658 9.99716 17.3294 9.93112 17.3775L9.93101 17.3775M9.954 16.4685L9.93101 17.3775M9.93101 17.3775L8.33901 18.5405L8.11542 18.7039M9.93101 17.3775L8.11542 18.7039M8.11542 18.7039L8.39178 18.7211M8.11542 18.7039L8.39178 18.7211M8.39178 18.7211C9.3449 18.7805 10.2529 18.7385 11.0095 18.5884L11.0096 18.5884M8.39178 18.7211L11.0096 18.5884M11.0096 18.5884C13.3886 18.1134 15.3745 16.9794 16.7652 15.2211M11.0096 18.5884L16.7652 15.2211M12.877 10.4213C12.8757 10.4918 12.8594 10.5612 12.8293 10.625C12.7993 10.6887 12.7561 10.7454 12.7026 10.7912C12.649 10.8371 12.5864 10.8712 12.5188 10.8911C12.4513 10.9111 12.3803 10.9166 12.3105 10.9072L12.877 10.4213ZM16.7652 15.2211C18.1557 13.463 18.945 11.0883 18.945 8.14229M16.7652 15.2211L18.945 8.14229M18.945 8.14229C18.945 7.99668 18.8714 7.78474 18.744 7.55722M18.945 8.14229L18.744 7.55722M18.744 7.55722C18.6142 7.32559 18.4215 7.06508 18.1673 6.82049M18.744 7.55722L18.1673 6.82049M18.1673 6.82049C17.6587 6.33088 16.8999 5.90129 15.905 5.90129L18.1673 6.82049ZM20.4978 5.53842C20.8818 5.48388 21.3285 5.34345 21.916 5.01105C21.6101 6.49526 21.4321 7.16764 20.7642 8.08336L20.745 8.10969V8.14229C20.745 11.9415 19.578 14.7567 17.8258 16.7397C16.0726 18.7238 13.7277 19.8813 11.3624 20.3532C9.74529 20.6759 7.7544 20.5728 5.99643 20.2106C5.11813 20.0296 4.30077 19.7846 3.61983 19.4974C3.03727 19.2517 2.56009 18.9775 2.22956 18.6904C2.66065 18.6482 3.4114 18.5535 4.24366 18.3598C5.24355 18.1272 6.37173 17.7494 7.20306 17.141L7.31918 17.056L7.19904 16.9768C7.15724 16.9492 7.11178 16.9196 7.06301 16.8879C6.30477 16.3938 4.74648 15.3786 3.73155 13.5166C2.66714 11.5637 2.19257 8.66295 3.91362 4.42592C5.57889 6.34347 7.2726 7.66001 8.99504 8.3668L8.99505 8.36681C9.57662 8.60536 9.94255 8.72373 10.2318 8.79141C10.4509 8.84265 10.6261 8.86463 10.8117 8.88794C10.8703 8.89529 10.93 8.90278 10.9924 8.91135L11.2872 8.95189L11.1059 8.77077C11.131 7.8414 11.4254 6.93895 11.9539 6.17331C12.4904 5.39606 13.2442 4.79434 14.1211 4.4435C14.9979 4.09265 15.9588 4.00828 16.8833 4.20093C17.8079 4.39359 18.6551 4.85471 19.3189 5.52657L19.3485 5.55658L19.3907 5.55628C19.4934 5.55556 19.5972 5.55908 19.7036 5.56269C19.9483 5.57098 20.2068 5.57974 20.4978 5.53842Z" fill="black" stroke="white" strokeWidth="0.2" />
              </g>
            </svg>
          </div>
        </div>
      </article>
      <Services></Services>
    </div>
  )
}

export default About;
