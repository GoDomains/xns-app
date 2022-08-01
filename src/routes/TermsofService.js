import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled/macro'
import { Title } from '../components/Typography/Basic'

const AboutContainer = styled('div')`
  margin: 1em;
  padding: 20px 40px;
  background-color: white;
`
const SubText = styled('p')``

const Text = styled('p')`
  margin: 0px;
`

function TermsofService() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = 'Terms of Service'
  }, [])

  return (
    <AboutContainer>
      <Title>Terms of Service</Title>
      <h4>OVERVIEW</h4>
      <SubText>
        These Terms of Service (collectively, this “Agreement”) is entered into
        by and between GoDomains Domain Registry ("GoDomains") and you, and is
        made effective as of the date of your use of this website ("Site"). This
        Agreement sets forth the general terms and conditions of your use of the
        Site and the products and services purchased or accessed through this
        Site (individually and collectively, the “Services”).{' '}
      </SubText>

      <SubText>
        "You", "your", and “user” any individual or entity who accepts this
        Agreement, has access to your account or uses the Services. "We", "us"
        and "our" refer collectively to GoDomains.{' '}
      </SubText>

      <h4>YOUR AGREEMENT</h4>
      <SubText>
        By using the Site or Services, you agree to all terms and conditions of
        this Agreement. Nothing in this Agreement shall be deemed to confer any
        third-party rights or benefits.
      </SubText>

      <h4>CHANGES TO THIS AGREEMENT</h4>
      <SubText>
        We reserve the right, upon notice to you, to modify any provisions of
        this Agreement at any time at our discretion and without liability to
        you. Modifications by us are effective thirty (30) days after notifying
        you via email to the address you have supplied us, or immediately via
        notice and acceptance through our Site. After such changes or
        modifications have been made, your continued use of the Site or Services
        constitutes your agreement to be bound by this Agreement as last
        revised. If you do not agree to the modifications or to any applicable
        policies or guidelines on the Services, you must stop using the Site or
        Services. If you have purchased Services from us, the terms and
        conditions of this Agreement shall continue in full force and effect,
        including any changes made to this Agreement, as long as you take
        advantage of and use the Services.
      </SubText>

      <h4>SERVICE AGREEMENTS</h4>
      <SubText>
        Service Agreements and additional policies apply to certain Services and
        are in addition to (not in lieu of) this Agreement. If there is a
        conflict between the provisions of a Services Agreement and the
        provisions of this Agreement, the provisions of the applicable Services
        Agreement shall control.{' '}
      </SubText>

      <h4>ELIGIBILITY & AUTHORITY</h4>
      <SubText>
        This Site and Services are available only to users who can form legally
        binding contracts under applicable law. By using this Site or Services,
        you represent and warrant that you are at least eighteen (18) years of
        age or otherwise recognized as being able to form legally binding
        contracts under applicable law, and are not a person barred from
        purchasing or receiving the Services under the laws of the Seychelles or
        any other applicable jurisdiction.{' '}
      </SubText>

      <SubText>
        If you are using the Services on behalf of any entity, you represent and
        warrant that you have the legal authority to bind such entity to the
        terms and conditions contained in this Agreement. If GoDomains finds
        that you do not have the legal authority to bind such entity, you will
        be personally responsible for the obligations contained in this
        Agreement. GoDomains shall not be liable for any loss or damage
        resulting from our reliance on any instruction, notice, document, or
        communication reasonably believed by us to be genuine and originating
        from an authorized representative of your entity. GoDomains reserves the
        right (but undertakes no duty) to require additional authentication from
        you if there is reasonable doubt about the authenticity of any such
        instruction, notice, document or communication.
      </SubText>

      <h4>ACCOUNTS & INFORMATION</h4>
      <SubText>
        In order to access some of the features of this Site or use some of the
        Services, you will be required to create an account (“User Account”). It
        is your responsibility to ensure that the information connected to your
        User Account is accurate, current and complete. You are required to
        notify GoDomains within seven (7) business days of any change in the
        information you provided as part of the application and/or registration
        process. If you do not respond to inquiries made by us to determine the
        validity of information provided by you, for whatever reason, within
        seven (7) business days, such failure will constitute a material breach
        of this Agreement.
      </SubText>

      <SubText>
        GoDomains reserves the right to suspend or terminate your User Account
        and any Services connected thereto if we have reason to believe that the
        information connected to your User Account information is not true,
        accurate, current, or is misleading or incomplete.{' '}
      </SubText>

      <SubText>
        You are responsible for keeping the information connected to your User
        Account secure and confidential. You are solely responsible for the
        activity that occurs in connection with your User Account, whether
        authorized by you or not.{' '}
      </SubText>

      <SubText>
        You must notify us immediately of any breach of security or unauthorized
        use of your User Account. GoDomains will not be liable for any loss you
        incur due to any unauthorized use of your User Account. You may be
        liable for any loss we or others incur caused by your User Account,
        whether caused by you, an authorized person, or an unauthorized person.
        We may charge you administrative fees equal to $200 (two hundred US
        Dollars) per hour for our time spent in relation to said matter,
        regardless of whether or not we return control over the User Account
        and/or domain names in question to you. You agree to indemnify us for
        any reasonable attorneys' fees and costs we may incur in relation to the
        matter, even if those fees and costs accrue as a result of defending an
        action, or responding to a threat of an action, initiated by you or a
        third party.
      </SubText>

      <h4>USER CONTENT; USER SUBMISSIONS</h4>
      <SubText>
        User Content. Some of the features of this Site or Services, including
        those Services that are hosted with GoDomains, may allow users to view,
        post, publish, share, store, or manage (a) ideas, opinions,
        recommendations, or advice via forum posts, content submitted in
        connection with a contest, product reviews or recommendations, or photos
        to be incorporated into a social media event or activity (“User
        Submissions”), or (b) literary, artistic, musical, or other content,
        including but not limited to photos and videos (together with User
        Submissions, “User Content”). User Content also includes all content
        submitted through your User Account. By posting or publishing User
        Content to this Site, or via the Services, you represent and warrant
        that (i) you have all necessary rights to distribute User Content via
        this Site or Services, either because you are the author and have the
        right to distribute the same, or because you have the appropriate
        distribution rights, licenses, consents, and/or permissions to use, in
        writing, from the copyright or other owner of the User Content, (ii) you
        have redacted any confidential information that you do not wish to be
        public, and (iii) the User Content does not violate any rights of any
        third party. You shall be solely responsible for any and all of your
        User Content or User Content that is submitted through your User
        Account, and the consequences of, and requirements for, distributing it.
      </SubText>

      <SubText>
        User Content (Other Than User Submissions/User Reviews). You shall
        retain all of your ownership or rights in User Content. By posting or
        publishing User Content to this Site or through the Services, you
        authorize us to use the intellectual property and other proprietary
        rights in and to your User Content to enable inclusion and use of the
        User Content in the manner contemplated by this Agreement. You hereby
        grant GoDomains a worldwide, non-exclusive, royalty-free, sublicensable
        (through multiple tiers), and transferable license to use, reproduce,
        distribute, prepare derivative works of, combine with other works,
        display, and perform your User Content in connection with this Site, the
        Services and GoDomains’s (and GoDomains’s affiliates’) business(es),
        including without limitation for promoting and redistributing all or
        part of this Site in any media formats and through any media channels
        without restrictions of any kind and without payment or other
        consideration of any kind, or permission or notification, to you or any
        third party. You also grant us the right to use your name, location and
        any other information you submit in connection with such User Content.
        The use of your or any other user’s name, likeness, voice or identity in
        connection with various features on the Services does not imply any
        endorsement of such features or of the Services unless explicitly stated
        otherwise.
      </SubText>

      <SubText>
        You also hereby grant each user of this Site a non-exclusive license to
        access your User Content (with the exception of User Content that you
        designate “private” or “password protected”) through this Site, and to
        use, reproduce, distribute, prepare derivative works of, combine with
        other works, display, and perform your User Content as permitted through
        the functionality of this Site and under this Agreement. The above
        licenses granted by you in your User Content terminate within a
        commercially reasonable time after you remove or delete your User
        Content from this Site. You understand and agree, however, that
        GoDomains may retain (but not distribute, display, or perform) server
        copies of your User Content that have been removed or deleted. The above
        licenses granted by you in Your User Content are perpetual and
        irrevocable. Notwithstanding anything to the contrary contained herein,
        GoDomains shall not use any User Content that has been designated
        “private” or “password protected” by You for the purpose of promoting
        this site or GoDomains’s (or GoDomains’s affiliates’) business(es).
      </SubText>

      <SubText>
        GoDomains’s Use of User Content. The provisions in this subsection apply
        specifically to GoDomains’s use of User Content posted to our websites
        (i.e., those sites which GoDomains directly controls or maintains). The
        applicable provisions are not intended to and do not have the effect of
        transferring any ownership or licensed rights (including intellectual
        property rights) you may have in User Content. You shall be solely
        responsible for any and all of your User Content or User Content that is
        submitted through your User Account, and the consequences of, and
        requirements for, distributing it. You acknowledge and agree that:{' '}
      </SubText>

      <SubText>
        Your submission of User Content is entirely voluntary. Your submission
        of User Content does not establish a confidential relationship or
        obligate us to treat your User Submissions as confidential or secret.
        GoDomains has no obligation, either express or implied, to develop or
        use your User Content, and no compensation is due to you or to anyone
        else for any intentional or unintentional use of your User Content.
        GoDomains may be working on the same or similar content, it may already
        know of such content from other sources, it may simply wish to develop
        this (or similar) content on its own, or it may have taken / will take
        some other action. GoDomains shall own exclusive rights (including all
        intellectual property and other proprietary rights) to any product
        reviews or other comments posted to our site(s), and shall be entitled
        to the unrestricted use and dissemination of any product reviews or
        other comments posted to Our site(s) for any purpose, commercial or
        otherwise, without acknowledgment or compensation to You or to anyone
        else.
        <h4>PRIVACY POLICY</h4>
        Please refer to GoDomains’s Privacy Policy for information on our
        privacy practices. If you are visiting this Site and/or using our
        Services from a country other than the country in which our servers are
        located, your communications with us may result in the transfer of
        information (including your User Account information) across
        international boundaries. By visiting this Site, using our Services and
        communicating electronically with us, you consent to such transfers.
      </SubText>

      <h4>GENERAL RULES OF CONDUCT</h4>
      <SubText>You acknowledge and agree that:</SubText>

      <Text>
        Your use of this Site and Services will comply with this Agreement, any
        applicable Services Agreement or policy that may apply to your use of
        the Services and all applicable local, state, national and international
        laws, rules and regulations.
      </Text>
      <Text>
        You will not collect or harvest (or permit anyone else to collect or
        harvest) any User Content or any non-public or personally identifiable
        information about another user or any other person or entity without
        their express prior written consent.
      </Text>
      <Text>
        You will not use this Site or any Services in a manner (as determined by
        GoDomains in its sole and absolute discretion) that:
      </Text>
      <Text>
        is unlawful, harmful, threatening, abusive, harassing, tortious,
        defamatory, slanderous, vulgar, obscene, libelous, invasive of another's
        privacy, hateful, embarrassing or racially, ethnically or otherwise
        objectionable;
      </Text>
      <Text>
        is designed to encourage unlawful behavior by others, such as hate
        crimes, terrorism and child pornography;
      </Text>
      <Text>
        impersonates of any person or entity, including, but not limited to, an
        employee of GoDomains or any of its affiliates, forum leader, guide or
        host, or falsely state or otherwise misrepresent your affiliation with a
        person or entity;
      </Text>
      <Text>
        you do not have a right to transmit under any law or under contractual
        or fiduciary relationships (such as inside information, proprietary and
        confidential information learned or disclosed as part of employment
        relationships or under nondisclosure agreements);
      </Text>
      <Text>
        infringes any patent, trademark, trade secret, copyright or other
        proprietary rights of any party;
      </Text>
      <Text>
        constitutes uploading, posting or other transmittal of any unsolicited
        or unauthorized advertising, promotional materials, "junk mail," "spam,"
        "chain letters," "pyramid schemes," or any other form of solicitation,
        as determined by GoDomains in its sole discretion;
      </Text>
      <Text>constitutes "stalking" or otherwise harassing another;</Text>
      <Text>
        Violates the Ryan Haight Online Pharmacy Consumer Protection Act of 2008
        or similar legislation, or promotes, encourages or engages in the sale
        or distribution of prescription medication without a valid prescription;
      </Text>
      <Text>
        Violates the Fight Online Sex Trafficking Act of 2017 or similar
        legislation, or promotes or facilitates prostitution and/or sex
        trafficking;
      </Text>
      <Text>
        Infringes on the intellectual property rights of any other person or
        entity;
      </Text>
      <Text>
        Violates the privacy or publicity rights of any other person or entity,
        or breaches any duty of confidentiality that you owe to any other person
        or entity;
      </Text>
      <Text>
        Interferes with the operation of this Site or Services found at this
        Site;
      </Text>
      <Text>
        Contains or installs any viruses, worms, bugs, Trojan horses or other
        code, files or programs designed to, or capable of, disrupting, damaging
        or limiting the functionality of any software or hardware; or,
      </Text>
      <Text>
        Contains false or deceptive language, or unsubstantiated or comparative
        claims, regarding GoDomains or GoDomains’s Services.
      </Text>
      <Text>
        You will not copy or distribute in any medium any part of this Site or
        Services, except where expressly authorized by GoDomains.
      </Text>
      <Text>
        You will not modify or alter any part of this Site or Services found at
        this Site or any of its related technologies.
      </Text>
      <Text>
        You will not access GoDomains Intellectual Property (as defined below)
        or User Content through any technology or means other than through this
        Site itself, or as GoDomains may designate.
      </Text>
      <Text>
        You are required to back-up all of your User Content so that you can
        access and use it when needed. GoDomains does not warrant that it
        backs-up any User Account or User Content, and you accept as a risk the
        loss of any and all of your User Content.
      </Text>
      <Text>
        You will not resell or provide the Services for a commercial purpose,
        including any of GoDomains's related technologies, without GoDomains's
        express prior written consent.
      </Text>
      <Text>
        You will not attempt to circumvent, disable or otherwise interfere with
        the security-related features of this Site or Services found at this
        Site (including without limitation those features that prevent or
        restrict use or copying of any GoDomains Intellectual Property or User
        Content) or to enforce limitations on the use of this Site or Services
        found at this Site, the GoDomains Intellectual Property or the User
        Content therein.
      </Text>
      <Text>
        You agree to provide any or all of the following documentation upon our
        request: 1) government-issued photo identification and/or
        government-issued business identification; 2) your payment method, such
        as credit card; and/or 3) photo or short video of your likeness.{' '}
      </Text>
      <Text>
        You are aware that GoDomains may from time-to-time call you about your
        account, and that, for the purposes of any and all such call(s), you may
        be subject to call recording and hereby consent to the same, subject to
        any applicable laws and our restrictions and obligations thereunder,
        including, where permissible, to record the entirety of such calls
        regardless of whether GoDomains asks you on any particular call for
        consent to record such call. You further acknowledge and agree that, to
        the extent permitted by applicable law, any such recording(s) may be
        submitted as evidence in any legal proceeding in which GoDomains is a
        party.
      </Text>
      <Text>
        By giving us your consent to receive marketing telephone calls from or
        on behalf of GoDomains, you agree that such calls may be initiated by an
        automatic telephone dialing system and/or use an artificial or
        prerecorded voice. You understand that providing consent is not a
        condition of purchasing any good or service from GoDomains. Similarly,
        by providing your mobile number, you consent to receive marketing text
        messages from or on behalf of GoDomains that may be sent by an automatic
        telephone dialing system. You understand that providing consent is not a
        condition of purchasing any good or service from GoDomains. Message and
        data rates may apply.
      </Text>
      <Text>
        Without limiting any of the rights set forth elsewhere in this
        Agreement, GoDomains expressly reserves the right to deny, cancel,
        terminate, suspend, or limit future access to this Site or any Services
        (including but not limited to the right to cancel or transfer any domain
        name registration) to any user (i) whose User Account or Services were
        previously terminated or suspended, whether due to breach of this or any
        other Agreement or any GoDomains policy, or (ii) who otherwise engages
        or has engaged in inappropriate or unlawful activity while utilizing the
        Site or Services (as determined by GoDomains in its sole and absolute
        discretion).
      </Text>
      <Text>
        We reserve the right to cancel or terminate your use of the Site and/or
        Services if you engage in any of the activities described above or your
        usage of the services results in, or is the subject of, legal action or
        threatened legal action, against GoDomains or any of its affiliates or
        partners, without consideration for whether such legal action or
        threatened legal action is eventually determined to be with or without
        merit.
      </Text>

      <h4>GoDomains INTELLECTUAL PROPERTY</h4>
      <SubText>
        Except for User Content, with respect to all content on this Site and
        Services all right, title and interest in and to all (i) registered and
        unregistered trademarks, service marks and logos; (ii) patents, patent
        applications, and patentable ideas, inventions, and/or improvements;
        (iii) trade secrets, proprietary information, and know-how; (iv) all
        divisions, continuations, reissues, renewals, and extensions thereof now
        existing or hereafter filed, issued, or acquired; (v) registered and
        unregistered copyrights including, without limitation, any forms,
        images, audiovisual displays, text, software and (vi) all other
        intellectual property, proprietary rights or other rights related to
        intangible property which are used, developed, comprising, embodied in,
        or practiced in connection with any of the Services identified herein
        (“GoDomains Intellectual Property”) are owned by GoDomains, and/or where
        applicable its partners and affiliates, and you agree to make no claim
        of interest in or ownership of any such GoDomains Intellectual Property.
        You acknowledge that no title to the GoDomains Intellectual Property is
        transferred to you, and that you do not obtain any rights, express or
        implied, in the Services, other than the rights expressly granted in
        this Agreement.
      </SubText>

      <h4>THIRD PARTY CONTENT</h4>
      <SubText>
        If you elect to sell or resell advertising or web space to a third party
        then you will be responsible for the content of that advertising and the
        actions of that third party. GoDomains has the absolute right to reject
        any advertising or other third party content that is illegal, or in our
        sole discretion determined to be, offensive, defamatory or otherwise in
        breach of any GoDomains policy or Agreement. Such content may result in
        the suspension or immediate termination of your User Account.
      </SubText>

      <h4>PROTECTION OF YOUR DATA</h4>
      <SubText>
        GoDomains offers certain Services available to you that may involve the
        submission, collection and/or use of personally identifying or
        identifiable information about you and your own customers (“Your Data”)
        in the course of your use of these Services, including without
        limitation domain name registration and web hosting services (“Covered
        Services”). Your Data, for the purpose of this Section, excludes any
        User Content. GoDomains’s Privacy Policy, which is hereby incorporated
        by reference and applicable to Covered Services, governs our use of Your
        Data.
      </SubText>

      <h4>STORAGE & SECURITY</h4>
      <SubText>
        You are entirely responsible for maintaining the confidentiality of your
        User Account access credentials and User Account information. You
        acknowledge and agree that you are solely responsible for all acts,
        omissions and use under and charges incurred with your User Account or
        password or in connection with your content displayed, linked,
        transmitted through or stored on or hosted on our server. You shall be
        solely responsible for undertaking measures to: (i) prevent any loss or
        damage to your content; (ii) maintain independent archival and backup
        copies of your content; (iii) ensure the security, confidentiality and
        integrity of your content transmitted through or stored on GoDomains
        servers; and (iv) ensure the confidentiality of your password.
      </SubText>

      <SubText>
        GoDomains's servers are not an archive and GoDomains shall have no
        liability to you or any other person for loss, damage or destruction of
        any of your content. Though some Services offered by GoDomains are PCI
        (Payment Card Industry) compliant, they should not be utilized as such
        without further compliance activity with respect to your business.
        GoDomains shall have no liability to you or any other person for your
        use of our Services in violation of these terms. You agree not to
        undertake any activities that may impact or place at risk GoDomains’s
        ability to maintain our PCI compliance. We reserve the right to take any
        action necessary to ensure our ongoing PCI compliance status.
      </SubText>

      <h4>AVAILABILITY OF WEBSITE AND SERVICES</h4>
      <SubText>
        Subject to the terms and conditions of this Agreement and our other
        policies and procedures, we shall use commercially reasonable efforts to
        attempt to provide this Site and Services on a twenty-four (24) hours a
        day, seven (7) days a week basis. You acknowledge and agree that from
        time to time this Site may be inaccessible or inoperable for any reason
        including, but not limited to, equipment malfunctions; maintenance,
        repairs or replacements; or causes beyond our reasonable control or that
        are not reasonably foreseeable including, but not limited to,
        interruption or failure of telecommunication or digital transmission
        links, hostile network attacks, network congestion or other failures, or
        acts of God. You acknowledge that we have no control over the
        availability of this Site or Services on a continuous or uninterrupted
        basis, and agree that we assume no liability to you or any other party
        with regard thereto.
      </SubText>

      <h4>TRADEMARK & COPYRIGHT CLAIMS</h4>
      <SubText>
        GoDomains is a service provider and respects the copyrights and other
        intellectual property rights of others. To the extent GoDomains receives
        a proper notice of infringement of copyright, trademark or other
        intellectual property, as per our Copyright and Trademark Policies,
        GoDomains reserves the right to access, preserve and disclose to third
        parties any of your information or data (including personally
        identifiable information and private communications) related to a
        written complaint of infringement if we believe in our sole discretion
        that such access, preservation, or disclosure is necessary or useful to
        respond to or otherwise address such complaint.
      </SubText>

      <SubText>
        GoDomains expressly reserves the right to terminate in appropriate
        circumstances an account or the access rights of a subscriber for
        repeated copyright infringement. GoDomains also reserves the right to
        modify, suspend and/or cancel an account, subscriber and/or domain name
        for even one instance of infringement, with no refund to you.
      </SubText>

      <SubText>
        If you would like to submit (a) a trademark claim for violation of a
        mark on which you hold a valid, registered trademark or service mark, or
        (b) a copyright claim for material on which you hold a bona fide
        copyright, please refer to GoDomains’s Copyright and Trademark Policies.
      </SubText>

      <h4>MONITORING OF CONTENT; ACCOUNT TERMINATION</h4>
      <SubText>
        In general, GoDomains does not pre-screen User Content. GoDomains does,
        however, reserve the right (but undertakes no duty) to do so. GoDomains
        also reserves the right to decide whether any item of User Content is
        appropriate and/or complies with this Agreement. GoDomains may remove
        any item of User Content and/or terminate a user’s access to this Site
        or the Services for posting or publishing any material in violation of
        this Agreement, or for otherwise violating this Agreement (as determined
        by GoDomains in its sole and absolute discretion), at any time and
        without prior notice. GoDomains may also terminate a user’s access to
        this Site or Services if GoDomains has reason to believe the user is a
        repeat offender. If GoDomains terminates your access to this Site or
        Services, GoDomains may, in its sole and absolute discretion, remove and
        destroy any data and files stored by you on its servers, including
        without limitation your User Account and all User Content.
      </SubText>

      <h4>DISCONTINUED SERVICES; END OF LIFE POLICY</h4>
      <SubText>
        GoDomains reserves the right to cease offering or providing any of the
        Services at any time, for any or no reason, and without prior notice.
        Although GoDomains makes great effort to maximize the lifeText of all
        its Services, there are times when a Service we offer will be
        discontinued or reach its End-of-Life ("EOL"). If that is the case, that
        product or service will no longer be supported by GoDomains, in any way,
        effective on the EOL date.
      </SubText>

      <SubText>
        Notice and Migration. When applicable, GoDomains will attempt to notify
        you thirty (30) days in advance of the EOL date. It is your
        responsibility to take all necessary steps to replace the Service by
        migrating to a new Service before the EOL date, or by entirely ceasing
        reliance on said Service before the EOL date. In either case, GoDomains
        will either offer a comparable Service for you to migrate to for the
        remainder of the term of your purchase or a prorated refund, to be
        determined by GoDomains in its sole and absolute discretion. When
        available, GoDomains may, with or without notice to you, migrate you to
        the most up-to-date version of the Service. You agree to take full
        responsibility for any and all loss or damage arising from any such
        migration.
      </SubText>

      <SubText>
        No Liability. GoDomains will not be liable to you or any third party for
        any modification, suspension, or discontinuance of any of the Services
        we may offer or facilitate access to.
      </SubText>
      <SubText>
        <h4>FEES & PAYMENTS</h4>
        Your payment method may be charged by one of our affiliated entities. In
        some instances your transaction may be processed by an entity within the
        disclosed country that is affiliated with our local payment service
        provider, and subject to the provisions of our Privacy Policy.
      </SubText>

      <SubText>(A) GENERAL TERMS, INCLUDING AUTOMATIC RENEWAL TERMS</SubText>

      <SubText>
        Payment Due at Time of Order; Non-Refundable. At the time you order
        Services, you are required to pay all amounts. Payments are
        non-refundable unless otherwise noted in the Refund Policy.
      </SubText>

      <SubText>
        Price Changes. GoDomains reserves the right to change its prices and
        fees at any time. Any changes to prices and fees for our Services will
        be posted on the Site and effective immediately with or without notice
        to you. If the term of Services you have purchased is for a period of
        months or years, changes in prices and fees shall be effective when the
        Services come up for renewal as further described below.
      </SubText>

      <SubText>
        Payment Types. Except as prohibited in any product-specific agreement,
        you may be able to pay for Services by using any of the following
        “Payment Methods”: (i) valid credit card; (ii) electronic payment from
        your personal or business checking account (as defined below); (iii)
        PayPal, (iv) International Payment Option (as defined below) or (v) via
        in-store credit balances, if applicable (and as defined below),
        (individually referred to as a “Payment Method”). You are solely
        responsible for keeping a current, valid Payment Method on file if you
        have any active Services in your User Account.{' '}
      </SubText>

      <SubText>
        Refunds Issued. Payments made to GoDomains are non refundable, Users
        understand and accept that under no circumstances payment transferred to
        GoDoamin would be refunded
      </SubText>

      <SubText>
        Renewals will be charged at GoDomains’s then current rates, which you
        acknowledge and agree may be higher or lower than the rates for the
        original service period. If you do not wish for any service to
        automatically renew, you may elect to cancel renewal, in which case,
        your services will terminate upon expiration of the then current term,
        unless you manually renew your services prior to that date and GoDomains
        shall not be liable to you or any third party regarding the same.
      </SubText>

      <SubText>
        GoDomains may also participate in “recurring billing programs” or
        “account updater services” supported by your credit card provider (and
        ultimately dependent on your bank’s participation). If we are unable to
        successfully charge your existing payment method, your credit card
        provider (or your bank) may notify us of updates to your credit card
        number and/or expiration date, or they may automatically charge your new
        credit card on our behalf without notification to us. In accordance with
        recurring billing program requirements, in the event that we are
        notified of an update to your credit card number and/or expiration date,
        GoDomains may automatically update your payment profile on your behalf.
        GoDomains makes no guarantees that we will request or receive updated
        credit card information. You acknowledge and agree that it is your sole
        responsibility to modify and maintain your Account Settings, including
        but not limited to (i) cancelling products and (ii) ensuring your
        associated Payment Method(s) are current and valid. Further, you
        acknowledge and agree that your failure to do so, may result in the
        interruption or loss of services, and GoDomains shall not be liable to
        you or any third party regarding the same.
      </SubText>

      <SubText>
        If for any reason GoDomains is unable to charge your Payment Method for
        the full amount owed, or if GoDomains receives notification of a
        chargeback, reversal, payment dispute, or is charged a penalty for any
        fee it previously charged to your Payment Method, GoDomains may pursue
        all available lawful remedies in order to obtain payment, including but
        not limited to, immediate cancellation or transfer, without notice to
        you, of any domain names or Services registered or renewed on your
        behalf.{' '}
      </SubText>

      <SubText>
        GoDomains may offer product-level pricing in various currencies. The
        transaction will be processed in the selected currency and the pricing
        displayed during the checkout process will be the actual amount
        submitted for payment. For certain Payment Methods, the issuer of your
        Payment Method may charge you a foreign transaction fee or other charge,
        which may be added to the final amount that appears on your bank
        statement or post as a separate amount. Please check with the issuer of
        your Payment Method for details. In addition, regardless of the selected
        currency, you acknowledge and agree that you may be charged Value Added
        Tax ("VAT"), Goods and Services Tax ("GST"), or other localized fees
        and/or taxes, based on your bank and/or the country indicated in your
        billing address section.
      </SubText>

      <SubText>(B) REFUND POLICY</SubText>

      <SubText>Payment made via GoDomain Platforms is non refundable.</SubText>
      <SubText>
        You agree that GoDomains, at our sole discretion and at any time, may
        pause, terminate, or change the Refund Policy without notice, for any
        reason, and with no commitment to refund or credit any fees previously
        paid to GoDomains.
      </SubText>

      <SubText>(C) IN-STORE CREDIT BALANCES</SubText>

      <SubText>
        In the event that your Account contains an in-store credit balance: (1)
        you may apply any available credit balance to any future purchase in
        your User Account; and (2) you authorize GoDomains to apply any
        available credit balance to any outstanding administrative fees,
        chargebacks, or other fees related to your User Account. In the event
        that GoDomains is unable to successfully charge either the Payment
        Method associated with a specific Service in your account or your backup
        Payment Method(s) when processing Service renewals, GoDomains may use
        any available in-store credit balance if there are enough funds to cover
        the entire transaction. Regardless of the amount of in-store credit
        available in your account, GoDomains is not responsible for the loss of
        products resulting from an inability to collect funds from your Payment
        Methods or the in-store credit. In-store credits will be applied based
        on the currency selected in the shopping cart at the time of purchase
        (or renewal). If additional funds are required to complete the purchase
        or renewal, credits held in a non-selected currency will be converted
        using GoDomains’s daily exchange rate based on the age of the credit
        (oldest to newest) until (i) enough funds are allocated to complete the
        transaction, or (ii) there is no available balance left in your account.
        You understand and agree that at the time of conversion, GoDomains may
        also impose an additional administrative fee.
      </SubText>

      <SubText>
        You can verify your available in-store credit balance at any time
        through your User Account. You acknowledge that in-store credit balances
        are non-transferrable, may only be used in the User Account in which
        they were acquired and may expire. Complimentary in-store credits will
        expire two years after issuance. In the event that GoDomains terminates
        your User Account, you acknowledge and agree that any remaining
        available in-store credit balance will be forfeited.
      </SubText>

      <SubText>
        You also acknowledge that funds available in your in-store credit
        balance will be held by GoDomains and will not accrue or pay interest
        for your behalf. To the extent any interest may accrue, GoDomains is
        entitled to receive and keep any such amounts to cover costs associated
        with supporting the in-store credit balance functionality.
      </SubText>
      <SubText>(D) EXPIRED DOMAIN NAME PURCHASES</SubText>

      <SubText>
        For expired domains names purchased through your account, you agree that
        you are responsible for payment immediately upon auction close for the
        successful bid amount via any valid payment method associated with the
        account, will be charged immediately following the auction close. If we
        are unable to collect payment, you may lose the rights to purchase the
        domain name.
      </SubText>

      <SubText>(E) ADMINISTRATIVE FEES</SubText>

      <SubText>
        GoDomains also reserves the right to charge you reasonable
        “administrative” fees" of $40 (forty US dollars) per hour, minimum of
        one hour, for (i) tasks GoDomains may perform outside the normal scope
        of its Services, (ii) additional time and/or costs GoDomains may incur
        in providing its Services, and/or (iii) your noncompliance with this
        Agreement (as determined by GoDomains in its sole and absolute
        discretion). Typical administrative or processing fee scenarios include,
        but are not limited to (i) customer service issues that require
        additional personal time or attention; (ii) UDRP actions(s) in
        connection with your domain name(s) and/or disputes that require
        accounting or legal services, whether performed by GoDomains staff or by
        outside firms retained by GoDomains; (iii) recouping any and all costs
        and fees, including the cost of Services, incurred by GoDomains as the
        results of chargebacks or other payment disputes brought by you, your
        bank or Payment Method processor. These administrative fees or
        processing fees will be billed to the Payment Method you have on file
        with GoDomains.
      </SubText>

      <h4>ADDITIONAL RESERVATION OF RIGHTS</h4>
      <SubText>
        GoDomains expressly reserves the right to deny, cancel, terminate,
        suspend, lock, or modify access to (or control of) any User Account or
        Services (including the right to cancel or transfer any domain name
        registration) for any reason (as determined by GoDomains in its sole and
        absolute discretion), including but not limited to the following: (i) to
        correct mistakes made by GoDomains in offering or delivering any
        Services (including any domain name registration), (ii) to protect the
        integrity and stability of, and correct mistakes made by, any domain
        name registry or registrar, (iii) to assist with our fraud and abuse
        detection and prevention efforts, (iv) to comply with court orders
        against you and/or your domain name or website and applicable local,
        state, national and international laws, rules and regulations, (v) to
        comply with requests of law enforcement, including subpoena requests,
        (vi) to comply with any dispute resolution process, (vii) to defend any
        legal action or threatened legal action without consideration for
        whether such legal action or threatened legal action is eventually
        determined to be with or without merit, (viii) to avoid any civil or
        criminal liability on the part of GoDomains, its officers, directors,
        employees and agents, as well as GoDomains's affiliates, including, but
        not limited to, instances where you have sued or threatened to sue
        GoDomains, or (ix) to respond to an excessive amount of complaints
        related in any way to your User Account, domain name(s), or content on
        your website that could result in damage to GoDomains’s business,
        operations, reputation or shareholders.
      </SubText>

      <SubText>
        GoDomains expressly reserves the right to review any User Account for
        excessive space and bandwidth utilization, and to terminate or apply
        additional fees to those User Accounts that exceed allowed levels.
      </SubText>

      <SubText>
        GoDomains expressly reserves the right to terminate, without notice to
        you, any and all Services where, in GoDomains's sole discretion, you are
        harassing or threatening GoDomains and/or any of GoDomains's employees.
      </SubText>

      <SubText>
        GoDomains Content. Except for User Content, the content on this Site and
        the Services , including without limitation the text, software, scripts,
        source code, API, graphics, photos, sounds, music, videos and
        interactive features and the trademarks, service marks and logos
        contained therein (“GoDomains Content”), are owned by or licensed to
        GoDomains in perpetuity, and are subject to copyright, trademark, and/or
        patent protection in the United States and foreign countries, and other
        intellectual property rights under United States and foreign laws.
        GoDomains Content is provided to you “as is”, “as available” and “with
        all faults” for your information and personal, non-commercial use only
        and may not be downloaded, copied, reproduced, distributed, transmitted,
        broadcast, displayed, sold, licensed, or otherwise exploited for any
        purposes whatsoever without the express prior written consent of
        GoDomains. No right or license under any copyright, trademark, patent,
        or other propriery right or license is granted by this Agreement.
        GoDomains reserves all rights not expressly granted in and to the
        GoDomains Content, this Site and the Services, and this Agreement do not
        transfer ownership of any of these rights.
      </SubText>

      <h4>LINKS TO THIRD PARTY WEBSITES</h4>
      <SubText>
        This Site and the Services may contain links to third-party websites
        that are not owned or controlled by GoDomains. GoDomains assumes no
        responsibility for the content, terms and conditions, privacy policies,
        or practices of any third-party websites. In addition, GoDomains does
        not censor or edit the content of any third-party websites. By using
        this Site or the Services, you expressly release GoDomains from any and
        all liability arising from your use of any third-party website.
        Accordingly, GoDomains encourages you to be aware when you leave this
        Site or the Services found at this Site and to review the terms and
        conditions, privacy policies, and other governing documents of each
        other website that you may visit.
      </SubText>
      <h4>DISCLAIMER</h4>
      <SubText>
        YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT YOUR USE OF THIS SITE AND
        THE SERVICES FOUND AT THIS SITE SHALL BE AT YOUR OWN RISK AND THAT THIS
        SITE AND THE SERVICES FOUND AT THIS SITE ARE PROVIDED “AS IS”, “AS
        AVAILABLE” AND “WITH ALL FAULTS”. GoDomains, ITS OFFICERS, DIRECTORS,
        EMPLOYEES, AGENTS, AND ALL THIRD PARTY SERVICE PROVIDERS DISCLAIM ALL
        WARRANTIES, STATUTORY, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED
        TO, ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE AND NON-INFRINGEMENT. GoDomains, ITS OFFICERS,
        DIRECTORS, EMPLOYEES, AND AGENTS MAKE NO REPRESENTATIONS OR WARRANTIES
        ABOUT (I) THE ACCURACY, COMPLETENESS, OR CONTENT OF THIS SITE, (II) THE
        ACCURACY, COMPLETENESS, OR CONTENT OF ANY SITES LINKED (THROUGH
        HYPERLINKS, BANNER ADVERTISING OR OTHERWISE) TO THIS SITE, AND/OR (III)
        THE SERVICES FOUND AT THIS SITE OR ANY SITES LINKED (THROUGH HYPERLINKS,
        BANNER ADVERTISING OR OTHERWISE) TO THIS SITE, AND GoDomains ASSUMES NO
        LIABILITY OR RESPONSIBILITY FOR THE SAME.
      </SubText>

      <SubText>
        IN ADDITION, YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT NO ORAL OR
        WRITTEN INFORMATION OR ADVICE PROVIDED BY GoDomains, ITS OFFICERS,
        DIRECTORS, EMPLOYEES, OR AGENTS (INCLUDING WITHOUT LIMITATION ITS CALL
        CENTER OR CUSTOMER SERVICE REPRESENTATIVES), AND THIRD PARTY SERVICE
        PROVIDERS WILL (I) CONSTITUTE LEGAL OR FINANCIAL ADVICE OR (II) CREATE A
        WARRANTY OF ANY KIND WITH RESPECT TO THIS SITE OR THE SERVICES FOUND AT
        THIS SITE, AND USERS SHOULD NOT RELY ON ANY SUCH INFORMATION OR ADVICE.
      </SubText>

      <SubText>
        THE FOREGOING DISCLAIMER OF REPRESENTATIONS AND WARRANTIES SHALL APPLY
        TO THE FULLEST EXTENT PERMITTED BY LAW, AND SHALL SURVIVE ANY
        TERMINATION OR EXPIRATION OF THIS AGREEMENT OR YOUR USE OF THIS SITE OR
        THE SERVICES FOUND AT THIS SITE.
      </SubText>

      <h4>LIMITATION OF LIABILITY</h4>
      <SubText>
        IN NO EVENT SHALL GODOMAINS, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
        AND ALL THIRD PARTY SERVICE PROVIDERS, BE LIABLE TO YOU OR ANY OTHER
        PERSON OR ENTITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
        PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING ANY THAT MAY
        RESULT FROM (I) THE ACCURACY, COMPLETENESS, OR CONTENT OF THIS SITE,
        (II) THE ACCURACY, COMPLETENESS, OR CONTENT OF ANY SITES LINKED (THROUGH
        HYPERLINKS, BANNER ADVERTISING OR OTHERWISE) TO THIS SITE, (III) THE
        SERVICES FOUND AT THIS SITE OR ANY SITES LINKED (THROUGH HYPERLINKS,
        BANNER ADVERTISING OR OTHERWISE) TO THIS SITE, (IV) PERSONAL INJURY OR
        PROPERTY DAMAGE OF ANY NATURE WHATSOEVER, (V) THIRD-PARTY CONDUCT OF ANY
        NATURE WHATSOEVER, (VI) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS
        AND/OR ANY AND ALL CONTENT, PERSONAL INFORMATION, FINANCIAL INFORMATION
        OR OTHER INFORMATION AND DATA STORED THEREIN, (VII) ANY INTERRUPTION OR
        CESSATION OF SERVICES TO OR FROM THIS SITE OR ANY SITES LINKED (THROUGH
        HYPERLINKS, BANNER ADVERTISING OR OTHERWISE) TO THIS SITE, (VIII) ANY
        VIRUSES, WORMS, BUGS, TROJAN HORSES, OR THE LIKE, WHICH MAY BE
        TRANSMITTED TO OR FROM THIS SITE OR ANY SITES LINKED (THROUGH
        HYPERLINKS, BANNER ADVERTISING OR OTHERWISE) TO THIS SITE, (IX) ANY USER
        CONTENT OR CONTENT THAT IS DEFAMATORY, HARASSING, ABUSIVE, HARMFUL TO
        MINORS OR ANY PROTECTED CLASS, PORNOGRAPHIC, “X-RATED”, OBSCENE OR
        OTHERWISE OBJECTIONABLE, AND/OR (X) ANY LOSS OR DAMAGE OF ANY KIND
        INCURRED AS A RESULT OF YOUR USE OF THIS SITE OR THE SERVICES FOUND AT
        THIS SITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL
        OR EQUITABLE THEORY, AND WHETHER OR NOT GODOMAINS IS ADVISED OF THE
        POSSIBILITY OF SUCH DAMAGES.
      </SubText>

      <SubText>
        IN ADDITION, YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT IN NO EVENT
        SHALL GODOMAINS TOTAL AGGREGATE LIABILITY EXCEED THE AMOUNT PAID TO
        GODOMAIN DURING DOMAIN REGISTRATION, THIS WILL BE THE MAXIMUM AMOUNT
        THAT COULD BE CLAIMED FOR USE OF GODOMAIN DOMAIN REGISTRATION SERVICES.
      </SubText>

      <SubText>
        THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT
        PERMITTED BY LAW, AND SHALL SURVIVE ANY TERMINATION OR EXPIRATION OF
        THIS AGREEMENT OR YOUR USE OF THIS SITE OR THE SERVICES FOUND AT THIS
        SITE.
      </SubText>

      <h4>INDEMNITY</h4>
      <SubText>
        YOU AGREE TO RELEASE, INDEMNIFY, AND HOLD GoDomains, OUR CONTRACTORS,
        AGENTS, EMPLOYEES, OFFICERS, DIRECTORS AND AFFILIATES HARMLESS FROM ALL
        LIABILITIES, CLAIMS AND EXPENSES, INCLUDING ATTORNEYS’ FEES AND COURT
        COSTS, FOR ANY CLAIMS RELATING TO YOUR USE OF THE SERVICE OR ARISING
        UNDER THIS AGREEMENT, INCLUDING WITHOUT LIMITATION, INFRINGEMENT OF ANY
        INTELLECTUAL PROPERTY OR OTHER PROPRIETARY RIGHT OF ANY PERSON OR
        ENTITY, OR FROM THE VIOLATION OF ANY TERM OR CONDITION OF THIS
        AGREEMENT. IF WE ARE AWARE OF A THIRD PARTY CLAIM WHICH IS RELATED TO
        THE SERVICE UNDER THIS AGREEMENT, WE MAY SEEK WRITTEN ASSURANCES FROM
        YOU IN WHICH YOU PROMISE TO INDEMNIFY AND HOLD US HARMLESS FROM THE
        COSTS AND LIABILITIES DESCRIBED IN THIS PARAGRAPH. SUCH WRITTEN
        ASSURANCES MAY INCLUDE THE POSTING OF PERFORMANCE BONDS OR OTHER
        GUARANTEES. YOUR FAILURE TO PROVIDE SUCH ASSURANCES MAY BE CONSIDERED A
        BREACH OF THIS AGREEMENT BY YOU.
      </SubText>

      <h4>COMPLIANCE WITH LOCAL LAWS</h4>
      <SubText>
        GoDomains makes no representation or warranty that the content available
        on this Site or Services found at this Site are appropriate in every
        country or jurisdiction, and access to this Site or Services from
        countries or jurisdictions where its content is illegal is prohibited.
        Users who choose to access this Site or the Services are responsible for
        compliance with all local laws, rules and regulations.
      </SubText>
      <h4>
        DISPUTES, BINDING INDIVIDUAL ARBITRATION AND WAIVER OF CLASS ACTIONS AND
        CLASS ARBITRATIONS
      </h4>
      <SubText>
        (A) Disputes. The terms of this Section shall apply to all Disputes
        between you and GoDomains, except for disputes governed by the Uniform
        Domain Name Dispute Resolution Policy referenced above and available
        here. For the purposes of this Section, “Dispute” shall mean any
        dispute, claim, or action between you and GoDomains arising under or
        relating to any GoDomains Services, GoDomains’s websites, this
        Agreement, or any other transaction involving you and GoDomains, whether
        in contract, warranty, misrepresentation, fraud, tort, intentional tort,
        statute, regulation, ordinance, or any other legal or equitable basis,
        and shall be interpreted to be given the broadest meaning allowable
        under law. YOU AND GoDomains AGREE THAT “DISPUTE” AS DEFINED IN THESE
        TERMS SHALL NOT INCLUDE ANY CLAIM OR CAUSE OF ACTION BY YOU OR GoDomains
        FOR (I) TRADE SECRET MISAPPROPRIATION, (II) PATENT INFRINGEMENT, (III)
        COPYRIGHT INFRINGEMENT OR MISUSE, AND (IV) TRADEMARK INFRINGEMENT OR
        DILUTION. Moreover, notwithstanding anything else in these Terms, a
        court, not the arbitrator, may decide if a claim falls within one of
        these four exceptions.
      </SubText>

      <SubText>
        (B) Binding Arbitration. You and GoDomains further agree: (i) to
        arbitrate all Disputes between the parties pursuant to the provisions in
        this Agreement; (ii) this Agreement memorializes a transaction in
        interstate commerce; (iii) the Federal Arbitration Act (9 U.S.C. §1, et
        seq.) governs the interpretation and enforcement of this Section; and
        (iv) this Section shall survive termination of these Terms. ARBITRATION
        MEANS THAT YOU WAIVE YOUR RIGHT TO A JUDGE OR JURY IN A COURT PROCEEDING
        AND YOUR GROUNDS FOR APPEAL ARE LIMITED. The arbitrator may award you
        the same damages as a court sitting in proper jurisdiction, as limited
        by the Limitation of Liability set forth in this Agreement and may award
        declaratory or injunctive relief only in favor of the individual party
        seeking relief and only to the extent necessary to provide relief
        warranted by that party’s individual claim. In addition, in some
        instances, the costs of arbitration could exceed the costs of litigation
        and the right to discovery may be more limited in arbitration than in
        court. The decision of the arbitrator shall be final and enforceable by
        any court with jurisdiction over the parties.
      </SubText>

      <SubText>
        (C) Small Claims Court. Notwithstanding the foregoing, you may bring an
        individual action in the small claims court of your state or
        municipality if the action is within that court’s jurisdiction and is
        pending only in that court.
        <SubText>
          (D) Dispute Notice.In the event of a Dispute, you or GoDomains must
          first send to the other party a notice of the Dispute that shall
          include a written statement that sets forth the name, address and
          contact information of the party giving it, the facts giving rise to
          the Dispute, and the relief requested (the “Dispute Notice”). The
          Dispute Notice to GoDomains must be sent by US Mail addressed to
          GoDomains, LLC, 2229 South Michigan Ave Suite 303, Chicago, IL 60616
          with email copy to support@GoDomains.com.com (collectively, the
          “GoDomains Notice Address”). Any Dispute Notice to you will be sent by
          US Mail and by email to the most recent addresses we have on file or
          otherwise in our records for you. If GoDomains and you do not reach an
          agreement to resolve the Dispute within sixty (60) days after the
          Dispute Notice is received, you or GoDomains may commence an
          arbitration proceeding pursuant to this Section. Following submission
          and receipt of the Dispute Notice, each of us agrees to act in good
          faith to seek to resolve the Dispute before commencing arbitration.
        </SubText>
        <SubText>
          (E) WAIVER OF CLASS ACTIONS AND CLASS ARBITRATIONS. YOU AND GoDomains
          AGREE THAT EACH PARTY MAY BRING DISPUTES AGAINST THE OTHER PARTY ONLY
          IN AN INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN
          ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING, INCLUDING WITHOUT
          LIMITATION FEDERAL OR STATE CLASS ACTIONS, OR CLASS ARBITRATIONS.
          NEITHER YOU NOR GoDomains WILL SEEK TO HAVE ANY DISPUTE HEARD AS A
          CLASS ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR IN ANY OTHER
          PROCEEDING IN WHICH EITHER PARTY ACTS OF PROPOSES TO ACT IN A
          REPRESENTATIVE CAPACITY. NO ARBITRATION OR OTHER PROCEEDING WILL BE
          COMBINED WITH ANOTHER WITHOUT THE PRIOR WRITTEN CONSENT OF ALL PARTIES
          TO ALL AFFECTED ARBITRATIONS OR PROCEEDINGS.
        </SubText>
        <SubText>
          (F) Arbitration Procedure. If a party elects to commence arbitration,
          the arbitration will be administered by the American Arbitration
          Association (“AAA”) and governed by the Consumer Arbitration Rules of
          the AAA (“AAA Rules”) in conjunction with the rules set forth in these
          Terms, except that AAA may not administer any multiple claimant or
          class arbitration, as the parties agree that the arbitration shall be
          limited to the resolution only of individual claims. The AAA Rules are
          at www.adr.org. If there is a conflict between the AAA Rules and the
          rules set forth in this Agreement, the rules set forth in this
          Agreement shall govern. All Disputes shall be resolved by a single
          neutral arbitrator, and both parties shall have a reasonable
          opportunity to participate in the selection of the arbitrator. The
          arbitrator is bound by this Agreement. The arbitrator, and not any
          federal, state or local court or agency, shall have exclusive
          authority to resolve all disputes arising out of or relating to the
          interpretation, applicability, enforceability or formation of this
          Agreement, including, but not limited to, any claim that all or any
          part of this Agreement is void or voidable. The arbitrator shall also
          have exclusive authority to rule on his or her own jurisdiction,
          including any objections with respect to the existence, scope, or
          validity of the arbitration agreement or to the arbitrability of any
          claim or counterclaim. Notwithstanding this broad delegation of
          authority to the arbitrator, a court may determine the limited
          question of whether a claim or cause of action is for (i) trade secret
          misappropriation, (ii) patent infringement, (iii) copyright
          infringement or misuse, or (iv) trademark infringement or dilution,
          which are excluded from the definition of “Disputes” as stated above.
          The arbitrator shall be empowered to grant whatever relief would be
          available in a court under law or in equity. The arbitrator’s award
          shall be binding on the parties and may be entered as a judgment in
          any court of competent jurisdiction. You may choose to engage in
          arbitration hearings by telephone. Arbitration hearings not conducted
          by telephone shall take place in Chicago, Illinois (USA).
        </SubText>
        <SubText>
          (G) Initiation of Arbitration Proceeding. If either you or GoDomains
          decide to arbitrate a Dispute, we agree to the following procedure:
          <SubText>
            Write a Demand for Arbitration. The demand must include a
            description of the Dispute and the amount of damages sought to be
            recovered. You can find a copy of a Demand for Arbitration at
            www.adr.org (“Demand for Arbitration: Consumer Arbitration Rules”).
          </SubText>
          Send one copy of the Demand for Arbitration to AAA by submitting it
          online or by mail to American Arbitration Association Case Filing
          Services, 1101 Laurel Oak Road, Suite 100 Voorhees, NJ 08043.
        </SubText>
        iii. Send one copy of the Demand for Arbitration to the other party at
        the same addresses as the Dispute Notice, or as otherwise agreed to by
        the parties.
      </SubText>

      <SubText>
        (H) Hearing Format. In all hearing formats, the arbitrator shall issue a
        written decision that explains the essential findings and conclusions on
        which an award, if any, is based. During the arbitration, the amount of
        any settlement offer made by GoDomains or you shall not be disclosed to
        the arbitrator until after the arbitrator determines the amount, if any,
        to which you or GoDomains is entitled. The discovery or exchange of
        non-privileged information relevant to the Dispute may be allowed during
        the arbitration.
      </SubText>

      <SubText>(I) Arbitration Fees and Payments.</SubText>

      <SubText>
        The AAA rules will govern payment of filing fees and the AAA’s and
        arbitrator’s fees and expenses.
      </SubText>

      <SubText>
        (J) Claims or Disputes Must be Filed Within One Year.To the extent
        permitted by law, any claim or dispute relating to this Agreement or to
        GoDomains’s provision of the Site and/or Services must be filed within
        one year in small claims or in arbitration. The one-year period begins
        when the claim or Notice of Dispute first could be filed. If not filed
        within one year, the claim or dispute will be permanently barred.
      </SubText>

      <SubText>
        (K) Amendments to this Section. Notwithstanding any provision in this
        Agreement to the contrary, you and GoDomains agree that if GoDomains
        makes any future amendments to the dispute resolution procedure and
        class action waiver provisions (other than a change to GoDomains’s
        contact information) in this Agreement, then GoDomains will notify you
        and you will have thirty (30) days from the date of notice to
        affirmatively opt-out of any such amendments. If you affirmatively
        opt-out of any future amendments, you are agreeing that you will
        arbitrate any Dispute between us in accordance with the language of this
        Section as stated in the then-current Agreement, without any of the
        proposed amendments governing. If you do not affirmatively opt-out of
        any future amendments, you will be deemed to have consented to any such
        future amendments.
      </SubText>

      <SubText>
        (L) Severability. If any provision in this Section is found to be
        unenforceable, that provision shall be severed with the remainder of
        this Agreement remaining in full force and effect. The foregoing shall
        not apply to the prohibition against class or representative actions; if
        the prohibition against class or representative actions is found to be
        unenforceable, this entire Section shall be null and void. The terms of
        this Section shall otherwise survive any termination of the Agreement.
      </SubText>

      <SubText>
        (M) Exclusive Venue for Other Controversies; Waiver of Jury
        Trial.GoDomains and you agree that any controversy excluded from the
        dispute resolution procedure and class action waiver provisions in this
        Section (other than an individual action filed in small claims court)
        shall be filed only in an appropriate state or federal court in Chicago,
        Illinois (USA). Each party hereby irrevocably and unconditionally
        consents and submits to the exclusive jurisdiction of such courts for
        any such controversy. You also agree to waive the right to trial by jury
        in any such action or proceeding.
      </SubText>

      <h4>UNCLAIMED PROPERTY; DORMANCY CHARGES</h4>
      <SubText>
        Please be advised that if a customer has an outstanding account balance
        (a credit positive balance) for three (3) years or more for any reason,
        and (i) GoDomains is unable to issue payment to such customer or (ii)
        GoDomains issued payment to such customer in the form of a paper check,
        but the check was never cashed, then GoDomains shall turn over such
        account balance to the State of Illinois in accordance with state law.
        You acknowledge and agree that in either case (i) or (ii) above,
        GoDomains may withhold a dormancy charge in an amount equal to the
        lesser of $25.00 or the total outstanding account balance associated
        with such customer.
      </SubText>

      <h4>SUCCESSORS AND ASSIGNS</h4>
      <SubText>
        This Agreement shall be binding upon and inure to the benefit of the
        parties hereto and their respective heirs, successors and assigns.
      </SubText>

      <h4>NO THIRD PARTY BENEFICIARIES</h4>
      <SubText>
        Nothing in this Agreement shall be deemed to confer any third-party
        rights or benefits.
      </SubText>

      <h4>TITLES & HEADINGS; INDEPENDENT COVENANTS; SEVERABILITY</h4>
      <SubText>
        The titles and headings of this Agreement are for convenience and ease
        of reference only and shall not be utilized in any way to construe or
        interpret the agreement of the parties as otherwise set forth herein.
        Each covenant and agreement in this Agreement shall be construed for all
        purposes to be a separate and independent covenant or agreement. If a
        court of competent jurisdiction holds any provision (or portion of a
        provision) of this Agreement to be illegal, invalid, or otherwise
        unenforceable, the remaining provisions (or portions of provisions) of
        this Agreement shall not be affected thereby and shall be found to be
        valid and enforceable to the fullest extent permitted by law.
      </SubText>

      <h4>ENGLISH LANGUAGE CONTROLS</h4>
      <SubText>
        This Agreement, along with all policies and the applicable Service
        Agreements identified above and incorporated herein by reference, are
        executed in the English language. Where a translated version is required
        to be provided to you and is to be considered binding by law (i) both
        language versions shall have equal validity, (ii) each party
        acknowledges that it has reviewed both language versions and that they
        are substantially the same in all material respects, and (iii) in the
        event of any discrepancy between these two versions, the translated
        version may prevail, provided that the intent of the Parties has been
        fully taken into consideration.
      </SubText>

      <h4>CONTACT INFORMATION</h4>
      <SubText>
        If you have any questions about this Agreement, please contact us by
        email.
      </SubText>
    </AboutContainer>
  )
}

export default TermsofService
