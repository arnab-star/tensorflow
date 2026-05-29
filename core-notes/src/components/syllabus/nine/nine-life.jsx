export default function NineLife() {
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

          .life-container{
            max-width:1200px;
            margin:40px auto;
            padding:35px;
            background:#dffaf1;
            border:1px solid rgba(255,255,255,0.25);
            border-radius:28px;
            box-shadow:0 12px 35px rgba(0,0,0,0.18);
          }

          .life-title{
            text-align:center;
            font-size:42px;
            font-weight:700;
            color:#12324a;
            margin-bottom:40px;
            letter-spacing:1px;
          }

          .life-section{
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

          .life-buttons{
            display:grid;
            grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));
            gap:18px;
          }

          .life-buttons button{
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

          .life-buttons button:hover{
            transform:translateY(-4px);
            background:linear-gradient(135deg, #1e40af, #1d4ed8);
            box-shadow:0 10px 24px rgba(37,99,235,0.35);
          }

          .life-buttons button:active{
            transform:scale(0.98);
          }
            .life-note{
            background:#ecfdf5;
            color:#065f46;
            padding:14px 18px;
            border-left:5px solid #10b981;
            border-radius:12px;
            font-size:16px;
            font-weight:600;
            margin-bottom:20px;
            line-height:1.6;
          }

          @media(max-width:768px){

            .life-container{
              margin:20px;
              padding:22px;
            }

            .life-title{
              font-size:32px;
            }

            .section-title{
              font-size:22px;
            }

            .life-buttons{
              grid-template-columns:1fr;
            }

            .life-buttons button{
              font-size:15px;
              padding:16px;
            }
          }
        `}
            </style>

            <div className="life-container">

                <h1 className="life-title">
                    Life Sciences Syllabus
                </h1>

                {/* 1st Summative */}
                <div className="life-section">

                    <h2 className="section-title">
                        1st Summative Evaluation
                    </h2>

                    <div className="life-buttons">

                        <button>
                            CH -1. জীবন ও তার বৈচিত্র
                            <br />
                            (Life and its Diversity)
                        </button>

                        <button>
                            CH -2. জীবন সংগঠনের স্তর
                            <br />
                            (Levels of Organization in Living Beings)
                        </button>

                    </div>
                </div>

                {/* 2nd Summative */}
                <div className="life-section">

                    <h2 className="section-title">
                        2nd Summative Evaluation
                    </h2>

                    <div className="life-buttons">

                        <button>
                            CH -3. জৈবনিক প্রক্রিয়া
                            <br />
                            (Physiological Processes of Life)
                        </button>

                    </div>
                </div>
                <div className="life-section">

                    <h2 className="section-title">
                        3rd Summative Evaluation
                    </h2>

                    <p className="life-note">
                        Note: Chapters 1, 2 and 3 will also be included in the 3rd Summative Examination.
                    </p>

                    <div className="life-buttons">
                        <button>
                            CH -4. জীববিদ্যা ও মানবকল্যান
                            <br />
                            (Biology and Human Welfare)
                        </button>

                        <button>
                            CH -5. পরিবেশ ও তার সম্পদ
                            <br />
                            (Environment and its Resources)
                        </button>

                    </div>
                </div>

            </div>
        </>
    );
}