export default function NineHistory() {
    return (
        <>
            <style>
                {`
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          body{
            background: linear-gradient(135deg, #11998e, #38ef7d);
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .history-container{
            max-width:1200px;
            margin:40px auto;
            padding:35px;
            background:#dffaf1;
            border:1px solid rgba(255,255,255,0.25);
            border-radius:28px;
            box-shadow:0 12px 35px rgba(0,0,0,0.18);
          }

          .history-title{
            text-align:center;
            font-size:42px;
            font-weight:700;
            color:#12324a;
            margin-bottom:40px;
            letter-spacing:1px;
          }

          .history-section{
            margin-bottom:35px;
          }

          .section-title{
            font-size:26px;
            font-weight:700;
            color:#134e4a;
            margin-bottom:18px;
            padding-left:8px;
            border-left:6px solid #0f766e;
          }

          .history-buttons{
            display:grid;
            grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));
            gap:18px;
          }

          .history-buttons button{
            background:linear-gradient(135deg, #2563eb, #1e40af);
            color:white;
            border:none;
            padding:18px 20px;
            border-radius:18px;
            font-size:17px;
            font-weight:600;
            text-align:left;
            line-height:1.6;
            cursor:pointer;
            transition:all 0.3s ease;
            box-shadow:0 6px 15px rgba(37,99,235,0.22);
          }

          .history-buttons button:hover{
            transform:translateY(-4px);
            background:linear-gradient(135deg, #1e40af, #1d4ed8);
            box-shadow:0 10px 24px rgba(37,99,235,0.35);
          }

          .history-buttons button:active{
            transform:scale(0.98);
          }

          @media(max-width:768px){

            .history-container{
              margin:20px;
              padding:22px;
            }

            .history-title{
              font-size:32px;
            }

            .section-title{
              font-size:22px;
            }

            .history-buttons{
              grid-template-columns:1fr;
            }

            .history-buttons button{
              font-size:15px;
              padding:16px;
            }
          }
        `}
            </style>

            <div className="history-container">

                <h1 className="history-title">
                    History Syllabus
                </h1>

                {/* 1st Summative */}
                <div className="history-section">

                    <h2 className="section-title">
                        1st Summative Evaluation
                    </h2>

                    <div className="history-buttons">

                        <button>
                            CH -1. ফরাসি বিপ্লবের কয়েকটি দিক
                            <br />
                            (Some Aspects of the French Revolution)
                        </button>

                        <button>
                            CH -2. বিপ্লবী আদর্শ, নেপোলিয়নীয় সাম্রাজ্য ও জাতীয়তাবাদ
                            <br />
                            (Revolutionary Ideals, Napoleonic Empire and Nationalism)
                        </button>

                    </div>
                </div>
                <div className="history-section">

                    <h2 className="section-title">
                        2nd Summative Evaluation
                    </h2>

                    <div className="history-buttons">

                        <button>
                            CH -3. ঊনবিংশ শতকের ইউরোপঃ রাজতান্ত্রিক ও জাতীয়তাবাদী ভাবধারার সংঘাত
                            <br />
                            (Europe in the Nineteenth Century: The Clash of Romanticism and Nationalism)
                        </button>

                        <button>
                            CH -4. শিল্পবিপ্লব, উপনিবেশবাদ ও সাম্রাজ্যবাদ
                            <br />
                            (Industrial Revolution, Colonialism and Imperialism)
                        </button>

                        <button>
                            CH -5. বিশ শতকে ইউরোপ
                            <br />
                            (Europe in the Twentieth Century)
                        </button>

                    </div>
                </div>
                <div className="history-section">

                    <h2 className="section-title">
                        3rd Summative Evaluation
                    </h2>

                    <div className="history-buttons">

                        <button>
                            CH -6. দ্বিতীয় বিশ্বযুদ্ধ ও তারপরের বিশ্ব
                            <br />
                            (World War II and After)
                        </button>

                        <button>
                            CH -7. জাতিসংঘ এবং সম্মিলিত জাতিপূঞ্জ
                            <br />
                            (United Nations and Other International Organizations)
                        </button>

                    </div>
                </div>

            </div>
        </>
    );
}