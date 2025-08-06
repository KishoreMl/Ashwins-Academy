const CallMeBackModal = () => {
    return (
        <div class="call-me-back-modal">
            <h1>Call Me Back</h1>
            <p>Please fill in the form below and we will call you back as soon as possible.</p>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="tel" placeholder="Phone" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CallMeBackModal;