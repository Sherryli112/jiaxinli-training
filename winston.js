const { createLogger, format, transports } = require('winston'); // 載入 winston 的 logging 函式庫
const { combine, timestamp, printf } = format; // 從 winston 物件中取出「屬性」，是 winston.format 提供的「格式工具」
//combine 用來把多個格式串起來；timestamp 自動在 log 中加上現在時間戳；printf 自訂輸出格式


// 自訂格式
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// 建立 logger
const logger = createLogger({
    level: 'info', //最低記錄等級是 info，等級排序：error > warn > info > verbose > debug > silly
    format: combine(  //格式處理器，用來控制 log 長什麼樣
        timestamp(),
        logFormat  //先有現在時間 timestamp()，再套用自訂格式 logFormat，順序不能改
    ),
    transports: [
        // 印到終端（只有在開發模式）
        new transports.Console({
            format: combine(
                format.colorize(), //colorize()：讓 log 在 terminal 上顯示「有顏色」
                logFormat
            )
        }),
        // transports 定義 log 要輸出到哪裡，例如 console、檔案
        // 寫到 combined.log
        new transports.File({ filename: 'combined.log' }),
        // 錯誤寫到 error.log
        new transports.File({ filename: 'error.log', level: 'error' })
    ]
});

module.exports = logger; // 匯出 logger 讓其他檔案可以使用
