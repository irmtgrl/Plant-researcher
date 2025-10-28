import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Mistral } from "@mistralai/mistralai"

dotenv.config()
const PORT = 8000
const app = express()
app.use(cors())

const mistralKey = process.env.MISTRAL_API_KEY

app.get("/api/:plant", async (req, res) => {
    const plant = req.params.plant
    try {
        const client = new Mistral({ apiKey: mistralKey })
        const aiRes = await client.chat.complete({
            model: 'mistral-large-latest',
            messages: [
                {
                    role: "system",
                    content: `Bir bitki adı verildiğinde aşağıdaki biçimde bilgi ver. Biçimlendirme HTML veya Markdown kurallarına uygun olmalı. "—", "•" veya benzeri karakterler kullanma. Yalnızca başlıklar (##) ve alt başlıklar (###) kullan. Paragraflar arasında boşluk bırak. Başlıklar ve alt başlıklarda emoji kullan.
                        ## 🌿 Hakkında
                        Bitki hakkında kısa ve öz bir bilgi paragrafı yaz. Kökeni, morfolojik özellikleri, yaygın kullanım alanları ve ekolojik tercihleri belirt. Sade, ansiklopedik bir dille yaz.

                        ## 🌱 Bakım Önerileri
                        Bu kısım akademik düzeyde olmalı. Bitkinin optimum büyüme koşullarını açıkla:
                        - Işık gereksinimi (lüks veya yön bazlı)
                        - Sulama sıklığı, su kalitesi, pH aralığı
                        - Toprak tipi, drenaj kapasitesi, ideal pH
                        - Gübreleme sıklığı, NPK oranları
                        - Ortam sıcaklığı, nem aralığı
                        - Fizyolojik stres faktörlerine dayanıklılık (soğuk, kuraklık, aşırı ışık)

                        ## 🐛 Zararlılar ve Mücadele Yöntemleri
                        Yaygın zararlı türlerini bilimsel adlarıyla listele. Her biri için:
                        - Zarar tipi (yaprak emici, kök zararlısı vb.)
                        - Bitkide oluşturduğu belirtiler
                        - Zararlının biyolojik döngüsü (aktif olduğu dönem)

                        **Mücadele:**
                        - Kültürel önlemler (budama, hijyen, karantina)
                        - Biyolojik mücadele (doğal düşmanlar, biyopestisitler)
                        - Kimyasal mücadele (ilaçların etken maddeleri)

                        ## 🦠 Hastalıklar
                        Akademik düzeyde yaz. Başlıca fungal, bakteriyel veya viral hastalıkları listele. Her hastalık için:
                        - Adı ve etken mikroorganizma
                        - Belirtileri (yapraklarda sararma, nekrotik leke, miselyum tabakası vb. betimle)
                        - Görülme zamanı (mevsim veya çevresel koşullar)
                        - Mücadele:
                        - Kültürel önlemler
                        - Biyolojik mücadele
                        - Kimyasal mücadelede kullanılan etken maddeler (örneğin: mancozeb, azoxystrobin, tebuconazole)

                        Cevabı sade, bilimsel ve sistematik bir Türkçe ile yaz. Gereksiz süslemeler veya popüler ifadeler kullanma.
                        `
                },
                {
                    role: "user",
                    content: `Bitki: ${plant}`
                }
            ],
            temperature: 0.5
        })
        const aiReport = await aiRes.choices[0].message.content

        res.json({
            aiReport
        })

    } catch (err) {
        res.status(500).json({ message: "AI Request is unsuccesfull.", details: err})
    }
})

app.listen(PORT, () => console.log(`Server connected, port: ${PORT}`))