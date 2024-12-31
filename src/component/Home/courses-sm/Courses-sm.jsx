import Courses from "./Courses-sm.module.css"
const image=[
  {img:"https://www.filepicker.io/api/file/8TrsDCMRxWldstTmlUhp"},
  {img:"https://www.filepicker.io/api/file/na1SyeNSGyHrdgcLrkA3"},
  {img:"https://www.filepicker.io/api/file/4IOjzVk9TGSofceaVovL"},
  {img:"https://www.filepicker.io/api/file/bAhxDzXdQYmDkbsE6sdS"},
  {img:"https://www.filepicker.io/api/file/g2L5sRVQN6JqWuWr49Nt"},
  {img:"https://www.filepicker.io/api/file/7s705m95QmaJ6GH4Hicu"},
  {img:"https://www.filepicker.io/api/file/SvOQrn0iRMOn1na0JXmp"},
  {img:"https://www.filepicker.io/api/file/MnMDd5rKT4CXLjaGNUNL"},
  {img:"https://www.filepicker.io/api/file/VGsr04kOQPKQMdUHvHWW"},
  {img:"https://www.filepicker.io/api/file/mrJJlkeSFCF0dmIIFvPA"},
  {img:"https://www.filepicker.io/api/file/mDmhZhBROymiFdFOvzxn"},
  {img:"https://www.filepicker.io/api/file/WKibf7rSPeew853W8I4G"},
  {img:"https://www.filepicker.io/api/file/r28NO7nXRfypSEl2qI6o"},
  {img:"https://www.filepicker.io/api/file/zpcw378oQomkJzD0W59I"},
  {img:"https://www.filepicker.io/api/file/RUcE2rURXiUAyFJEK9Iw"},
  {img:"https://www.filepicker.io/api/file/YDIQU4iIRSOcIrv19kmx"},
  {img:"https://www.filepicker.io/api/file/mVmacfQYTDex4ByLhlpD"},
  {img:"https://www.filepicker.io/api/file/rkWqtpX0SwGKfCFXIlsA"}
]
const logos = [
  {
      src: "https://www.talentlms.com/wp-content/uploads/2023/07/Google.png",
      alt: "Google",
  },
  {
      src: "https://www.talentlms.com/wp-content/uploads/2023/04/amazon-1.png",
      alt: "Amazon",
  },
  {
      src: "https://www.talentlms.com/wp-content/uploads/2023/04/Meta-1.png",
      alt: "Meta",
  },
  {
      src: "https://www.talentlms.com/wp-content/uploads/2023/04/OpenAI-2.png",
      alt: "OpenAI",
  },
  {
      src: "https://www.talentlms.com/wp-content/uploads/2023/04/eBay.png",
      alt: "eBay",
  },
  {
      src: "https://www.talentlms.com/wp-content/uploads/2023/04/pwc.png",
      alt: "PwC",
  },
  {
      src: "https://www.talentlms.com/wp-content/uploads/2023/04/Roland.png",
      alt: "Roland",
  },
  {
      src: "https://www.talentlms.com/wp-content/uploads/2023/04/oracle.png",
      alt: "Oracle",
  },
];


export default function CoursesSm() {
    return(
      <>
          <div className="container mb-[20px]" >
            <div className="row">
            {image.map((e, i) => (
                  <div className={Courses.column} key={i}>
                      <a>
                          <img className={Courses.image} src={e.img} />
                      </a>
                  </div>
            ))}
          </div>
            </div>
            <div className={`${Courses['marquee-wrapper']} mb-[25px] mt-[40px]`}>
            <div className={`${Courses.marquee}  ${Courses.scroll}`} style={{ animationDuration: '100s' }}>
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        className={Courses['img-fluid']}
                        style={{ maxWidth: '140px', opacity: 1 }}
                    />
                ))}
            </div>
            <div className={`${Courses.marquee} ${Courses.scroll} `} style={{ animationDuration: '100s' }}>
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        className={Courses['img-fluid']}
                        style={{ maxWidth: '140px', opacity: 1 }}
                    />
                ))}
            </div>
        </div>
  </>
)}