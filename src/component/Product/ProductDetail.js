import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './style.css'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const [comment, setComment] = useState()
    const [text, setText] = useState()

    useEffect(() => {
        axios.get(`http://localhost:9999/products/${id}`)
            .then((data) => setProduct(data.data.data))
            .then(console.log(product))
            .catch((error) => console.error("Error fetching product", error));
        axios.get(`http://localhost:9999/products/${id}/comments`)
            .then((data) => setComment(data.data.data))
            .then(console.log(comment))
            .catch((error) => console.error("Error fetching product", error));
    }, [product])

    const addComment = async e => {
        e.preventDefault();
        axios.post(`http://localhost:9999/products/${id}/comment`, {
            user: "Tuna",
            text: text
        })
            .then(function (response) {
                console.log(response);
            })
            .then(() => {
                setText('')
              })
            .catch(function (error) {
                console.log(error);
            });
    };

    if (!product || !comment) {
        return (
            <div>
                loading...
            </div>
        )
    }


    return (
        <div className="container2">
            <div className="card">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRUSEhQRGBERFRgPERESEhIRERERGBUZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTY1GiQ7Qjs0RC40NTEBDAwMEA8QHxISHjckISw0NDU2MTExMTQ0NTQ0MTQ0NDQ1NDQxNDQ0MTQxNDQ0MTExNDE0NDQ0NzExNDExMTE0Mf/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABQQHAQMGAgj/xABMEAABAwIBBgcKCwYFBQAAAAABAAIDBBEFBxIhMUFREyIyYXGRsgYUFjVUcoGDkrEzQlJTYnOTwcPR0iMlgqGztKKk4fDxFRckY6P/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAJxEAAgICAgIBAwUBAAAAAAAAAAECEQMxBBIhQVETYXEFIpGxwTL/2gAMAwEAAhEDEQA/ALmQhYQAISqStc8kR6GA2z7XLt+aN3OtDg3473E7y933WCfUdDu4RnDeEibTsJzgHE6rh7zo9pe+9m7n+0/80+oUOrhZukne7dz/AG3/AJrIp2/S9uT80dQodXRdJu927ne2/wDNRqkMjaXHOsNPwj/zRQUdFdYVG433ePkl4DDYnSvuQHnhJWuO3MjvxhznRzLXFhvdBLxi8xg6gZKeK3obpHpQo3oFFvRe2cOZGcOZUUcAx7yr/MD8lFxKhxynifNJUuLI25z82cOdmjba2m2tHSXwPpL4L/zhvHWjOG8da+VfDHENffdRbz1gd2Vf5XUe3b7lEifVecN460Zw3jrXyr4Z1/ldR7f+iwe7Ov8AK6j2/wDRAH1VnjeOtGeN4618q+GNf5XP7ae4VPjFTGJY6qTMcS0F0oaTY2JtbVe49ClGDk6irHR9HZw3jrWQV89OosaOuqO/4Ya+pev37HpbUOdbYJInfyeFZ9DJ8MKPoNZVH4LlQq6WQQ4lEc3UX5ha8DVe2pw529RVy4dXMqGNljcHMeAQQbjSLqpprYiWhCEgMKDiryGhoNi9wZcaw08o9SnJdih40Q+k49TCmgEfdFi7KKB8r+Sxuho1uOgNYOkkD08yo/Fe7GsqHl3CvYwnisicWBo3Fw0uPSVYuWFjjS3bfNZIxz/Nu5t+tzVT0EjM0ggk7LG21PYNnUdz3d3U0r2mR75IibOa8gyAbS12s9B0e9XtQVwmYyRjgWvaHAjUQRcEeghfL9ZK08kaNHToGtX/AJP2OZRQNffOEbDY6wCLgdRanp0OLs6Z1SQc0AE7b6lmN4kBIFnDQRsK1ggE5zSQdo9y9RayQLA6gj2SPV1XGVjF3Q0/BsJDp3cFcawy13/ysP4irHk+77yqYyzPOdTN2Eyu9IEYQ9CZ2GT3ufZR0zHlo74na2WVxHGAcM5sfMACNG+66pz1HjdZoA1AADoAXh8q2RhSo2xikqNr5ErxVgmikhcSGysdESNYDmkXHWvU9Ql09SrlAkVFW9yVZE5zBEXtvofHmua4bDvHQVD8G6vyeX2VbctSoclUoLhxftmd4Y/JV3g7VfMSdSx4P1XzEnUrJfVLS6qVsf0+L9sg8cV7OAi7nKpxA4F4vtdZo6SSVZeCQCmgZCDfMBznbC4kucRzXJUHvle2VK1YOHHE215ZW2o6HjZltY9Jo6hTIJLrTKBW5HvG8IZWQuicBn2JidbSx9tBHNvG5ash2MO/bUT7/sznMB+KCTdvoIPtJvSm9lyeTF2bjFU0as6YegTW+9cXnRSaZJF7oQhc8DCWYo27oTuL7elhTNLsT5UXS/sFNDQnx6ibK1zHtDmPDmvadTmnWCqdxXJxK15NNI0xk3DZS5j2DdnAEO6dHQrzmbe91FdQg6QpDoqLueydEPD6tzHBpuIWZxa47M95A0cwBvvCtZtSymjL5Xta0DOJcQ0AbzsC3x0jW6SqVyoY0+aqNMCeDhzeJsdI5odc77AgD070tBosU5SaDPzOF22zs2TM9rNsuooMQjnYJIntcxwuC0ggjmI1r5o7xdnBvxnM4UC4vm69WzRp0rqMmWNPp6tsFzwc+cC3Y17WlwcOkAg9I3I8oSlZfEv3feVTGWU8elG7hvwlcr3X0833lUzll5dN678NP0Nlm5+hRKiVZdJoUCplXTSNtmqonS2eoWKmVKqidWxRCUjbNUqHJUqNLMoj5VbEqcyY+oWh06iukWvPV8WVykTROtzJkua5SIir4spkxrA9NaQpNTBP6CLUibSRFDqgZtOoaT0LjMmL/wB81B+VwxPpmaV20p4OI/Kk/Zt9Ov8AldcTky8cz+u/rBeb5mZSzdV6X9jhK59fhF9oQhZSwwl2J8qLpf2CmKXYlyoul/YKaGjTJv3qDV0RkfFJnvbwRzs1ps12rX1JhzH/AIXks3KRI8vOgqicpmDviqO+mgmOXNa5w0hsrWhtjuuACPSr3LClOJYWJA5rmtcx4s5rmhzXDcQdBCBM+dGYk9ri8OdnFnAmx1s+SeodS6fJrhD5qltSQRHDnWdqDpXNLQ0b7Alx6BvXd/8Ab+kzs/vdl73tnzZl/Nz7W5l1OGYW2INa1rWtaLNY1oaxo3ADQAl5ElQ0Gr0Kmssh49N678JXO4WCpjLHy6b13vjT9DZ3bnpbVPU2Q6EqrHrrI0uQsqpEqqJFMqnpVO5WFEpGmR60OcsvK1FCZW2ZugIAWxjFZFkWZY1Tadi8QxJpSU11fGVESTQwLp8MpbkaFBoKTmW3ugxLvZghjP8A5EzdJGuKI6C/mJ0gek7Fi5nKWODbIzkoR7M91dWJZc1hvHFxGkanP+M7r0ejnXMZM/HNR67+sE5waLNYEmya+Oajpm/rBeX42R5MkpPbMvDk5ylJ+y+kIQtp0DCXYlyoul/YKYpbiZ40Q23f2CmtjR4WLIWVIkYssWC9IQB5zAsgLKEAeX6lS+WQcem9d+ErofqVMZZuXS9EvvjQJnZSnQlFa7Wmcz9CS1r9a6yJOQoqnJbKVNqXKBIrCts0OWA1bM1bGRoSEa2MUqKFboadM6ajU0KjRTUt9ifUFHq0LbQ0F9inYpXx0LA54Dpnj9lDexd9J3yWDft2KnPyI4422Rk0lbMYlXsoow9wDpX6IYtr3fKO5o2n0LjafPke6SQ50kjs57jtO4bgBYAbgtD5H1D3SyuzpH6zqDRsa0bGjcm9BT6QvK83lyyv7HK5WZy/ah3QMsAubya+Oqjpn/rBdbSs0Lksm2jGanpmH/2CXA9mngKrL5QhC6J0DCV4l8JF/F2HJoleJfCR9Duy5NbGjysrCypEgQhCABCEIA8v1KmMsvLpeiX3xq536lS+WQ8el5uGH840CZ08z9CS1j0xnk0JPUuXXQmxdOVHzVKc269xU900xEdkKmwUt9inU1DfYnNJh3MjskAupaHmTuhw4m2hM6bDgxpe8taxou57iGtaN5JSLGu6ewMVHdrdTpyLPd5gPJHOdPRrWLkc6ONb8lOXNHGvJKxrG46IFkYbJVfJ1xxc77bfo9dlwj3Pme6SRznvebuc7ST+Q5hoC9cFc3OknSTrJO8qdS068/yOVLI7ZgnmcvLNtJTJ5RwrRTQprTxrn32kZ2rdm+Jq4nJ4f31U+fL/AHLV30bFwOT3x1U/WS/3LV1OGqs6HEVWX2hCFuNphK8S+Ei/i7Dk0S3Em8eI87x/gKa2NHhCwhSGZQsIQMyhCwgDD9SpfLKePS9EvvjV0P1Kmcs7bPpQdYEvvjQJjKZ+hL5BcqU/SiKDOK6tkSNFT3Tejw++xTKDDr7F09DhwaLusANJJ0AKmeVRQnJIXUGFX2KfVzxUo43GktojaRfpcfihGIYoGAti0bC+3GPm7ulcjWS3JN9J0knSSVyuRzm/ETk8r9Q6/tx7+TTjWKyVDv2jrMBuyNuhjfRtPOUnc1SJXXK1hq5E5uTtmDFKU32k7ZiONNKWJRYWJtTMWeTb8GteSVTxpjCxaYGJhExWY4FkYmWMVdZPh++qr6yX+5arMDFWuTtt8bqh9Oc9VQD9y6fFVWbeOqsvlCELWajCXYnyoul/YKYpdifKi6X9gprY0akIQpjBCEIAFthhLuYb1qU+n0NCTdAaHUxbpBBtsKpHLWDwlNc3P7X8NXtIdCorLZ8LTdEv4ajYhjDFnJ3h2H3toWvDaS9l1lHShjc4/wDJW7LlUFbK5z6o801K1gu70DaVHrqku0amjU0ah07ypkzidP8AsJVVNK4eXkSyv7HJ5WaT8ehVWPJSaoCdzRJfPCqOtnNcUxM9qAt87LLRdVTxstxNLwSYE2pklidpTekeq1Dyaosc04TGJqX0qaQhaYRNMEew1Vnk68eVfn1H9cK0AFV2Tvx5V+fUf3AW3AqbNmBeWXuhCFeXmEuxPlRdLuwUxS7E+VF0u7BTWxo1IQhTGCEIQAKVTv0W3e5RVlrraQk1YEyQ6FRmWv4Sn9b+GrokmNtipXLM676Yn/2/hqNUKiycKptSY1NQ1gznuDWN2nQFANUynifLIbMaPSTsA5ydCrbG+6Z8zySdA5DByWDcOfnTyYpZ5dbqK2/8Obyckr6x8s7mr7pmN0MaXfScc0dWtLJO6En5HoVevxQnatX/AFA71fDjYIKlG/yYJ8fJP/p/wWH/ANYB1hvuWHVbHcy4BuIHepUWJHepvBhl6r8FMuHL5Z1s8QdqS2WMhRKfFedTm1TZNulZcnBdXB39mUfSnB3sjsksU3oZNSTVDLLZQVNjYrnSx06apm3FKzt6IpvCufw6a4CfU7lZGFG+CJTQqsyd+PKvz6j+4CtRiqrJ0b45VnYX1B/zAV+NUbMSL3QhCsLTCXYnyoul3YKYpdifKi6XdgprY0aUIQpkjKFhCAMoWEIAH6lS+WXlU3rvfGrnfqVMZZeXTeu98aT0JjPKVixD2UzDxY2h77bZHDQD0N7Srh0xKed1dQZamaT5Uj7eaHWb/IBIHBaF4VGb6Ktv2zPCLPCLXZZTsi4GwSL02VaVi6LIuBOZUkKZT1xG1Jbr2x6kpUQlhTOzoa5rhmv0grFVGY3BwN2E6Hfcedc3S1NiumoKpsjeDfpa4WI/3tUM2KOVX7+SpcatHQ4LVXA0rrKR6r3Dw6GTg3G7TxmP+U38xtXc4e+4Cw9GvDJRTi6Y0qKpsUb5XmzImOkedzWNLj7lUmR6YyYm57uU+N73ec57Sfem+UjumaWGihcCXEd8vadDWg3EQO8kC/MLbTZLkX8Yn6p3bYrFHqrZsxH0QhCEi0wl2J8qLpd2CmKXYnyoul3YKa2NGlCEKZIEIQgAQhCAMP1KmMsh49N673xq5pNSpjLJy6b13vjSehPQgxEXcTvN0tc1OsQj0lLHsWki0RS1YstxYvJagg0aiFiy2lq8lqBUaiELYWrGagKMsNk1oJ7FK2hSYCmmNRO4oJBI0NdrGlp+S7eluKY9UjOhvwYbxHiO4ef49djzW1rThVRYhMO6Kj4SIVDBx4wBJb40ex3oJ6jzKXWLdtEZ40/JxNSuqyL+MT9U/tsXKVC6vIv4xP1T+2xZ83oeM+iEIQqCwwl2KcqLpd2CmKXYpyoul3YKa2NbNIQvKFMkekLCEAZQsIQBiTUqYyycum9d741c0mpUzlk5dN673xpPQmRsQh0pTJGuor4UnmhWoBQ6NayxT3xrS+NFEWiGWryWqU5i1liCNEctWM1SCxec1IKNQatzAsBq2sahEkMKN1iF1uEyAjNcLtcC1wOotIsR1LkaYLocLfYhSJHHY9RGnlfEb2Y7iE/GYdLT1Eem66HIv4xP1T+2xbcoNHdkNSBvp3nrcw9sekLVkW8Yu+qf22KjK9FcY9W0fRCEIVBIwl2KcqLzndgpiluKcqLzndgprY0aELKFMkYWUIQAIQhMDzJqVNZZOXTeu/DVyyalTWWTlU3rvw0paEx1WwpRPTrqamG6WTU6vTGc5JAoz4U/lplFkplIQkfEtTok3fTrS6BAUKzGvBjTN0C1mBOhUL8xbGMUrgF7ZCih0FOxO8PbpCg08Kc0MWpJjJuO0nDUNQy1yxhmbbXnR8fR0hpHpXMZFvGJ+qf2mKwaCEOBadTgWnoIsVwGRuMsxJzTrbG9p6Q9gKoyMTXmz6GQhCpImEtxXlRec7sFMkrxY8eEW1ufp3cQprY0a0IWFMkZQgITAEIQgDzJqVM5Y+XTeu/CVzSalTWWQcem0/PaN3waUtCZ3csd1Ekp04dGtboVYmMQyUqiyUi6N9Oo76ZSTFRzb6VR30q6V9LzKO+k5lKxnOOpuZeDTcy6F1JzLWaTmRYqEHe3MvbKXmTzvTmXplJzIsKFkFKm1JTrdFSqfTwWSbGTKBlrLgMmTM3Gqhu4zt6pgrHpmWVeZOR++6vTbj1Fuf8Ab6lTMUi9kIQqiJhLcWHGiO5zh1sKZKHicBew5vLaQ9nO5uz06U1sCGsLxFIHgOGo7NoO0HnXtTJmUIQmAIQhAHmTUqcyxR6ad2wOkb1hh+5XKVwmUbA3VNO4MF3sIkjG9zb8X0gkdNknoTOigIe1rxpD2teDvBAIK2cGuFydd10bo2UVS4RzwgRRl5zGyMboa251ObqsddhbbaxBGpJ2NMiGJa3QqfwaODUrGLXU61Opk1MaxwSLAUGlXk0v+7JxwKxwPMixCfvVem0qbcDzLPAosBY2mW5kVlN4LmWeC5khmmNqrbJiOExiqkbpbnTOvzOlJHuT7u37r4qON8cT2vq3tLGNaQ7gbjlvOwjYNZNti25Fu5x0ET6qRpDp7BgIscwaveetVyZFlpoQhQIghCEALanDruL43ZrzygRdjzvI2HnChv4Vps6Jx52XcD/LQnywnY7EPCu+al9h5+5Y4Z3zU32b/wAk/Qn2YWc/w7vmpvspP0o74d81N9lJ+ldAhHZhZz3fDvmp/spP0rTUEvFjDN9lJ+ldOhHZhZTvdD3CMqnF4hqGSO1vZE853nNIsenQelJI+4HEoxmw1NQ1o0ABlZEAOhoIV+oSsLKG8CsX8sqPbr9H+FY8C8Y8sqfbr/0q+kIsLKF8CsY8sqfbrv0o8CsY8sqPtK79KvpCLCyhfArGPLKj7Su/SjwKxjyyo+0rv0q+kIsLKG8CcY8sqPbrv0o8CcY8sqPtK39KvlCLCyhvAfGPLJ/ta39Kycn+KycWSrmLTrBfUvHU6wV8IRYWVd3L5JIYHNlqXGR7bODLZrAR9H8yVZ0cYaA1oAa0WAGoBbEJCBCEIA//2Q==" alt="" />
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
            </div>
            <div className="comment-holder">
                {comment.map((e) => {
                    return (
                        <div key={e._id}>
                            <p style={{ fontWeight: "bold" }}>{e.user}</p>
                            <p>{e.text}</p>
                            <p>{e.createdAt}</p>
                        </div>
                    )
                })}
            </div>
            <div className="comment-container">
                <form onSubmit={addComment}>
                    <textarea
                        name='text'
                        type='textarea'
                        placeholder='Enter your comment'
                        required
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <br />
                    <input type="submit" name="submit" value="Comment" />
                </form>
            </div>
        </div>
    )
}

export default ProductDetail