export default function NineEnglish() {
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

         .math-container{
            max-width:1200px;
            margin:40px auto;
            padding:30px;
            background: #dffaf1;
            border:1px solid rgba(255,255,255,0.2);
            border-radius:24px;
            box-shadow:0 10px 30px rgba(0,0,0,0.18);
            }

          .math-title{
            text-align:center;
            font-size:42px;
            font-weight:700;
            color:#1d3557;
            margin-bottom:35px;
            letter-spacing:1px;
          }

          .math-buttons{
            display:grid;
            grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));
            gap:18px;
          }

          .math-buttons button{
            background:linear-gradient(135deg, #2563eb, #1e40af);
            color:white;
            border:none;
            padding:18px 20px;
            border-radius:16px;
            font-size:17px;
            font-weight:600;
            text-align:left;
            line-height:1.5;
            cursor:pointer;
            transition:all 0.3s ease;
            box-shadow:0 6px 15px rgba(37,99,235,0.2);
          }

          .math-buttons button:hover{
            transform:translateY(-4px);
            background:linear-gradient(135deg, #1e40af, #1d4ed8);
            box-shadow:0 10px 20px rgba(37,99,235,0.35);
          }

          .math-buttons button:active{
            transform:scale(0.98);
          }

          @media(max-width:768px){

            .math-container{
              margin:20px;
              padding:20px;
            }

            .math-title{
              font-size:32px;
            }

            .math-buttons{
              grid-template-columns:1fr;
            }

            .math-buttons button{
              font-size:15px;
              padding:16px;
            }
          }
        `}
            </style>

            <div className="math-container">
                <h1 className="math-title">Math Syllabus</h1>

                <div className="math-buttons">

                    <button>
                        CH -1. জীবন ও তার বৈচিত্র (Life and its Diversity)
                    </button>

                    <button>
                        CH -2. জীবন সংগঠনের স্তর (Levels of Organization in Living Beings)
                    </button>

                    <button>
                        CH -3. জৈবনিক প্রক্রিয়া (Physiological Processes of Life)
                    </button>

                    <button>
                        CH -4. জীববিদ্যা ও মানবকল্যান (Biology and Human Welfare)
                    </button>

                    <button>
                        CH -5. পরিবেশ ও তার সম্পদ (Environment and its Resources)
                    </button>
                </div>
            </div>
        </>
    );
}