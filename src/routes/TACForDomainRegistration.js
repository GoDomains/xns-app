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

function TACForDomainRegistration() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = 'Terms and Conditions for Domain Registration'
  }, [])

  return (
    <AboutContainer>
      <Title>Terms and Conditions for Domain Name Registration</Title>
      <h3>DOMAIN NAME REGISTRATION AGREEMENT</h3>
      <SubText>
        These terms and conditions apply if you purchase domain name
        registration services from godomains.io(“GoDomains”). This Domain Name
        Registration Agreement ("Agreement") sets forth the terms and conditions
        for the use of this website (the “Site”) and of your domain name
        registration and related services (individually and collectively, the
        “Services”).
      </SubText>
      <SubText>
        "You", "your", and “user” any individual or entity who accepts this
        Agreement, has access to your account or uses the Services. "We", "us"
        and "our" refer collectively to GoDomains.
      </SubText>
      <SubText>
        YOU ACKNOWLEDGE THAT GODOMAIN.IO IS NOT AN ICANN-ACCREDITED REGISTRAR
        BOUND BY AN AGREEMENT WITH ICANN AND THAT THESE CAN LEAD TO SUBSEQUENT
        RISK ASSOCIATED DOMAIN EXTENSION AND/OR WITH BLOCKCHAIN. YOU HAVE READ,
        UNDERSTOOD AND AGREE TO BE BOUND BY ALL TERMS AND CONDITIONS AND DISPUTE
        RESOLUTION POLICY LOCATED HERE, AND UNIFORM RAPID SUSPENSION POLICY
        LOCATED HERE, AND SIMILAR POLICIES OF CCTLD REGISTRIES, AS AMENDED FROM
        TIME TO TIME, ALL OF WHICH ARE HEREBY INCORPORATED AND MADE A PART OF
        THIS AGREEMENT BY REFERENCE.
      </SubText>
      <SubText>
        You explicitly agree that violation or refusal to comply with any
        policy, and/or any rules, policies, or agreements of any relevant
        government, is a violation of this Agreement and may result in immediate
        termination of this Agreement. THIS AGREEMENT HAS A PROVISION FOR
        ARBITRATION OF DISPUTES BETWEEN THE PARTIES. YOUR AGREEMENT
      </SubText>
      <SubText>
        By using the Site and Services, you agree to all terms and conditions of
        this Agreement, which incorporates by reference Universal Terms of
        Service Agreement ("UTOS"), (ii) all agreements, guidelines, policies,
        practices, procedures, registration requirements or operational
        standards (iii) any plan limits, product disclaimers or other
        restrictions presented to you on the Domain Name Registration Services
        landing page of this Site.
      </SubText>
      <h4>CHANGES TO THIS AGREEMENT</h4>
      <SubText>
        This Agreement may change over time, either through amendments by us,
        changes to ongoiing policy or applicable law which may or may not be
        reflected in the text of this Agreement, or otherwise. We reserve the
        right, upon notice to you, to modify any provisions of this Agreement at
        any time at our discretion and without liability to you. Modifications
        by us are effective thirty (30) days after notifying on website/or the
        address you have supplied us, or immediately via notice and acceptance
        through our Site. Modifications resulting from law or policy change will
        be effective upon their effective date. After such changes or
        modifications have been made, your continued use of the Site or Services
        constitutes your agreement to be bound by this Agreement as last
        revised.
      </SubText>
      <SubText>
        If you do not agree to the modifications, you may terminate this
        Agreement at any time by providing us with notice by email, and/or by
        deleting your domain name. Notice of your termination will be effective
        upon receipt and processing by us, but is subject to your having paid in
        full any and all fees or other expenses due and payable by you to us.
        Any fees paid by you if you terminate the Agreement are nonrefundable,
        but you will not incur any additional fees unless they are owed to us
        for any unpaid services.
      </SubText>
      <h4>YOUR ACCOUNT</h4>
      <SubText>
        You must create an account to use the Services ("User Account")
        described herein. As described in the usage policy, it is your
        responsibility to ensure that the information connected to your User
        Account is accurate, current and complete -- and updated immediately
        upon any change. Failure to provide and maintain current and complete
        information may result in suspension and/or cancellation of your domain
        name registration(s).
      </SubText>
      <h4>USE OF INFORMATION</h4>
      <SubText>
        You must provide certain current, complete and accurate information with
        respect to your User Account with respect to the WHOIS information for
        your domain name. You must submit the following information with respect
        to you, for your domain name registration: name, postal address, e-mail
        address, telephone number, and where available, fax number if required
        by the registrar. Registrar and/or any government may establish or
        modify the guidelines, limits and/or requirements that relate to the
        amount and type of information that We may or must make available to the
        public or to private entities, and the manner in which such information
        is made available.
      </SubText>
      <SubText>
        We will make available the domain name registration information you
        provide and/or applicable laws may require or permit (including through
        web-based and other on-line WHOIS lookup systems), whether during or
        after the term of your domain name registration services. We may make
        publicly available, or directly available to third parties, some or all
        of the information You provide, for purposes of inspection or other
        purposes as required or permitted by applicable laws You irrevocably
        waive any and all claims and causes of action you may have, if any,
        arising from such disclosure or use of such information.{' '}
      </SubText>
      <h4> Registration Requirements.</h4>
      <SubText>
        To the extent domain name registration sevice, We requires you meet
        eligibility (e.g., residency), validation (e.g., DNS validation) or
        other authentication requirements as a condition to registering a domain
        name, you must provide to us complete and accurate information to
        satisfy all such requirements. By submitting an application or
        registering or renewing your domain name, you represent and warrant
        that: (a) all information provided to register or renew the domain name
        (including all supporting documents, if any) is true, complete and
        correct, and is not misleading in any way, and the application is made
        in good faith; (b) you meet, and will continue to meet, the eligibility
        criteria prescribed in the Registry Policies for the applicable Domain
        for the duration of the domain name registration; (c) you have not
        previously submitted an application to register the domain name with
        another registrar using the same eligibility criteria, and the other
        registrar has rejected the application; (d) you acknowledge and agree
        that even if the domain name is accepted for registration, your
        entitlement to register the domain name may be challenged by others who
        claim to have an entitlement to the domain name; (e) any confidential
        information is redacted from the materials that you send to us, as we
        cannot guarantee confidentiality of such information particularly
        insofar as it must be shared with the Registry Operator and other third
        parties; and, (f) you acknowledge and agree that the Registry or the
        registrar can suspend, cancel and/or transfer the registration of the
        domain name, without any refund, if any of your warranties or
        representations are found to be untrue, incomplete, incorrect or
        misleading.
      </SubText>
      <h4> Legal Processes.</h4>
      <SubText>
        We might be ordered by a court or arbitrator to cancel, modify, or
        transfer your domain name; it is your responsibility to list accurate
        contact information in association with your Account and to communicate
        with litigants, potential litigants, and governmental authorities. It is
        not our responsibility to forward court orders or other communications
        to you. Our policy is to comply with court orders from courts of
        competent jurisdiction as well as other regulatory decisions. If you
        contact us informing us that you are contesting a court order from a
        court of competent jurisdiction, we may, but are not obligated to, place
        a transfer lock on the domain name pending the outcome of the dispute.
        If you contact us informing us that you are contesting an adverse, your
        time limits and procedures to do so are subject to the requirements set
        forth in the usage policy. We will not delay implementation of such
        orders or decisions based solely on your informing us that you intend to
        contest the decision.
      </SubText>
      <SubText>
        Indemnification of Registry.You agree to indemnify, defend and hold
        harmless (within 30 days of demand) the Registry Operator and Registry
        Service Provider and their subcontractors, subsidiaries, affiliates,
        divisions, shareholders, directors, officers, employees, accountants,
        attorneys, insurers, agents, predecessors, successors and assigns, from
        and against any and all claims, demands, damages, losses, costs,
        expenses, causes of action or other liabilities of any kind, whether
        known or unknown, including reasonable legal and attorneys’ fees and
        expenses, in any way arising out of, relating to, or otherwise in
        connection with the your domain name registration, including, without
        limitation, the use, registration, extension, renewal, deletion, and/or
        transfer thereof and/or the violation of any applicable terms or
        conditions governing the registration. You shall not enter into any
        settlement or compromise of any such indemnifiable claim without the
        Registrar’s or Registry Operator’s prior written consent, which consent
        shall not be unreasonably withheld, and you agree that these
        indemnification obligations shall survive the termination or expiration
        of the Agreement for any reason.{' '}
      </SubText>
      <SubText>
        IN NO EVENT SHALL THE REGISTRY OPERATOR BE LIABLE TO YOU OR ANY OTHER
        PERSON FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL,
        EXEMPLARY OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFIT OR GOODWILL, FOR
        ANY MATTER, WHETHER SUCH LIABILITY IS ASSERTED ON THE BASIS OF CONTRACT,
        TORT (INCLUDING NEGLIGENCE), BREACH OF WARRANTIES, EITHER EXPRESS OR
        IMPLIED, ANY BREACH OF THIS AGREEMENT OR ITS INCORPORATED AGREEMENTS AND
        POLICIES YOUR INABILITY TO USE THE DOMAIN NAME, YOUR LOSS OF DATA OR
        FILES OR OTHERWISE, EVEN IF THE REGISTRY OPERATOR HAS BEEN ADVISED OF
        THE POSSIBILITY OF SUCH DAMAGES.
      </SubText>
      <h4>Potential Restriction on Availability of Privacy or Proxy.</h4>
      <SubText>
        You acknowledge and agree that you may not be permitted to purchase
        domain name registrations in certain markets, countries and territories
        or for certain TLDs. In such case, you must register for any and all
        Domain registrations using your personal information, which information
        you represent and warrant is current, accurate and complete.
      </SubText>
      <h4> Agents and Licences</h4>
      <SubText>
        If you are registering a domain name for or on behalf of someone else,
        you represent that you have the authority to and will bind that person
        as a principal to all terms and conditions provided herein. If you
        licence the use of a domain name you register to us or a to third party,
        you remain the domain name holder of record, and remain responsible for
        all obligations at law and under this Agreement, including but not
        limited to payment obligations, and providing (and updating, as
        necessary) both your own full contact information, and accurate
        technical, administrative, billing and zone contact information adequate
        to facilitate timely resolution of any problems that arise in connection
        with the domain name and domain name registration and for ensuring
        non-infringement of any third party intellectual property rights or
        other rights.
      </SubText>
      <h4>FEES AND PAYMENTS</h4>
      <SubText>
        You agree to pay any and all prices and fees due for Services purchased
        or obtained at this Site at the time you order the Services. GoDomains
        expressly reserves the right to change or modify its prices and fees at
        any time, and such changes or modifications shall be posted online at
        this Site and effective immediately without need for further notice to
        you. If you have purchased or obtained Services for a period of months
        or years, changes or modifications in prices and fees shall be effective
        when the Services in question come up for renewal as further described
        below.
      </SubText>
      <SubText>
        In general, fees for all Services are paid in advance and are
        non-refundable. You agree that you will not attempt to chargeback or
        claim refund for services, and you will be liable for all costs incurred
        by us in disputing any such chargeback attempt, including our reasonable
        attorneys’ fees. In particular, all premium and auction domain name
        purchase prices and registration fees are non-refundable.{' '}
      </SubText>
      <h4>DOMAIN NAME RENEWAL TERMS</h4>
      <SubText>
        It is your responsibility to keep your own records and to maintain your
        own reminders regarding when your domain name registration or other
        Services are set to expire. You agree that we may, but are not obligated
        to, allow you to renew your domain name after its registration term has
        ended and its expiration date has passed, provided that you have timely
        paid all required renewal fees. Domain name renewal fees are
        non-refundable. It is your responsibility to keep your billing
        information up to date and we are not required to, but may, contact you
        to update this information in the event that an attempted transaction is
        not processed successfully.
      </SubText>
      <SubText>
        You agree that after the expiration date of your domain name
        registration and before it is deleted or renewed, we may direct the
        domain name to an IP address designated by us, including without
        limitation to an IP address which hosts a parking, under construction,
        or other temporary page that may include promotions and advertisements
        for, and links to, the other Site, third-party websites, third-party
        product and service offerings, and/or Internet search engines and/or
        advertisements, and you agree that we may place our contact information
        in the WHOIS output for the expired domain name.{' '}
      </SubText>
      <SubText>
        GoDomains may, but is not obligated to, provide our customers with a
        "Grace Period" after their domain name registration services expiration
        date(s) (a "Grace Period" begins on the day after the date of expiration
        and typically lasts 30 days). Notice of the expiry will be included in
        notices that are emailed to you. During this period you can renew a
        domain name registration; however, a grace period is not guaranteed and
        can change or be eliminated at any time without notice.{' '}
      </SubText>
      <SubText>
        Please note that domain name/s if expired, if it has not been renewed by
        a customer prior to the expiration date. GoDomains may therefore take
        ownership of expired domains until such time as they are renewed,
        auctioned, sold, or deleted -- in our sole discretion as owner of the
        expired domain name.
      </SubText>
      <SubText>
        If an expired domain name is not timely renewed by you, rather than
        delete the domain name registration, we may, in our sole discretion,
        attempt to find a third party who is interested in registering,
        purchasing, or back ordering the domain name, and then renew and
        transfer the domain name registration to that third party. This renewal
        and transfer process is called a domain sale or "Direct Transfer” or
        “Transfer Fulfillment."
      </SubText>
      <SubText>
        There can be limitation to "redeem" a deleted domain name registration
        for a customer, and we in turn may (but are not obligated to) provide
        customers with an ability to redeem a particular domain name
        registration. Such a Redemption Grace Period (RGP) is not guaranteed,
        indeed it is not offered by many Registry Operators. Therefore,
        customers should renew their domain name registration services in
        advance of the domain name registration expiration date(s) to avoid
        deletion of domain name registration services.{' '}
      </SubText>
      <SubText>
        Grace Periods and Redemption Grace Periods me be subjected to periodic
        changes, Some domain name would not have grace period at all, Users are
        required to set remainders and renew their domain name minimum 14 days
        in advance, to avoid deletion.
      </SubText>
      <h4>TRANSFERS</h4>
      <SubText>
        Transfers.Transfer of your domain name(s) services shall be sole
        responsibility of the person initiating such transfer. If you want
        transfer a domain name to of from other wallets, It woudl be sole
        responsibility of user to check and confirm all details priod to such
        transfer, GoDomains would not be responsible for any loss or deletion
        during domain transfers.
      </SubText>
      <SubText>
        You understand that GoDomains is only responsible for the submission of
        the registrar transfer request, and the adding of the domain name to
        registrar database upon a successful transfer. GoDomains is not
        responsible for any action required by the previous registrar or by
        their customer to either facilitate the transfer or expedite it.
        Transfers may take from one day to several days depending on the
        processes{' '}
      </SubText>
      <h4> DISPUTE RESOLUTION POLICY</h4>
      <SubText>
        You agree to submit to proceedings commenced under the Domain Name
        Dispute Resolution Policy. You further acknowledge that these may be
        modified from time to time by Registry Operators.{' '}
      </SubText>
      <SubText>
        You agree that in the event a domain name dispute arises with any third
        party, you will indemnify, defend and hold us harmless pursuant to the
        terms and conditions set forth below in this Agreement.{' '}
      </SubText>
      <SubText>
        It is your responsibility to list accurate contact information in
        association with your account, and to communicate with litigants,
        potential litigants, and governmental authorities. It is not our
        responsibility to forward court orders or other communications to you.{' '}
      </SubText>
      <SubText>
        If GoDomain is notified that a complaint has been filed with a
        governmental, administrative or judicial body, regarding a domain name
        registered by you using GoDomains, then g GoDomains in its sole
        discretion may take whatever action GoDomains deems necessary regarding
        modification, cancellation or transfer of the domain name in order to
        comply with the actions or requirements of the governmental,
        administrative or judicial body.{' '}
      </SubText>
      <h4>YOUR OBLIGATIONS; SUSPENSION OF SERVICES; BREACH OF AGREEMENT</h4>
      <SubText>
        You represent and warrant to the best of your knowledge that, the
        registration of the domain and the manner it is directly or indirectly
        used, will not infringe the legal rights of any third party, violate any
        applicable law, regulation or decree of any government or court, nor
        otherwise violate any provision of this Agreement.
      </SubText>
      <SubText>
        Your ability to use any of the services provided by g GoDomains is
        subject to cancellation or suspension in the event there is an
        unresolved breach of this Agreement and/or suspension or cancellation is
        required by any policy now in effect or adopted or any government or
        GoDomains.
      </SubText>
      <SubText>
        You acknowledge and agree that GoDomains and the Registry Operator
        reserve the right to deny, cancel or transfer any registration or
        transaction, or place any domain name(s) on lock, hold or similar
        status, as either deems necessary, in the unlimited and sole discretion
        of GoDomains: (i) to comply with specifications adopted by any industry
        group generally recognized as authoritative with respect to the Internet
        (e.g., RFCs), (ii) to protect the integrity and stability of, pr correct
        mistakes made by, any domain name registry or registrar, (iii) for the
        non-payment of fees to registry or registrar, (iv) to comply with any
        applicable court orders, laws, government rules or requirements,
        requests of law enforcement, or any dispute resolution process, (v) to
        comply with any applicable rules or regulations, including without
        limitation, the applicable, (vi) to avoid any liability, civil or
        criminal, on the part of registrar or Registry Operator, as well as
        their affiliates, contractors, subsidiaries, officers, directors, and
        employees, (vii) per the terms of this Agreement, including upon
        occurrence of any of the prohibited activities described herein, or (ix)
        during the resolution of a dispute.
      </SubText>
      <SubText>
        You agree that your failure to comply completely with the terms and
        conditions of this Agreement, or of any GoDomains rule or policy, may be
        considered by GoDomains to be a material breach of this Agreement and
        GoDomains may immediately terminate this Agreement, and your domain name
        registration may be immediately suspended, cancelled and/or transferred.
        In our sole discretion, GoDomains may provide you with notice of such
        breach via email to the address you have provided us. In that event, if
        you do not provide GoDomains with material evidence that you have not
        breached your obligations to GoDomains within ten (10) business days,
        then GoDomains may terminate its relationship with you and take any
        remedial action available to GoDomains under the applicable laws. Such
        remedial action may be implemented without notice to you and may
        include, but is not limited to, suspending, cancelling or transferring
        the registration of any of your domain names and discontinuing any
        services provided by GoDomains to you. No fees will be refunded to you
        should your Services be cancelled or terminated because of a breach.
      </SubText>
      <SubText>
        GoDomains's failure to act upon or notify you of any event which may
        constitute a breach, shall not relieve you from or excuse you of the
        fact that you have committed a breach.
      </SubText>
      <h4>LIMITATION OF LIABILITY.</h4>
      <SubText>
        WE WILL NOT BE LIABLE FOR ANY (a) SUSPENSION OR LOSS OF THE SERVICES,
        (b) USE OF THE SERVICES, (c) INTERRUPTION OF SERVICES OR INTERRUPTION OF
        YOUR BUSINESS, (d) ACCESS DELAYS OR ACCESS INTERRUPTIONS TO OUR WEB
        SITE(S) OR SERVICES OR DELAYS OR ACCESS INTERRUPTIONS YOU EXPERIENCE IN
        RELATION TO A DOMAIN NAME REGISTERED WITH US; (e) LOSS OR LIABILITY
        RESULTING FROM ACTS OF OR EVENTS BEYOND OUR CONTROL (f) DATA
        NON-DELIVERY, MIS-DELIVERY, CORRUPTION, DESTRUCTION OR OTHER
        MODIFICATION; (g) THE PROCESSING OF AN APPLICATION FOR A DOMAIN NAME
        REGISTRATION; (h) LOSS OR LIABILITY RESULTING FROM THE UNAUTHORIZED USE
        OR MISUSE OF YOUR ACCOUNT IDENTIFIER OR PASSWORD; OR (i) APPLICATION OF
        ANY DISPUTE POLICY. WE WILL NOT BE LIABLE FOR ANY INDIRECT, SPECIAL,
        INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY KIND (INCLUDING LOST
        PROFITS) REGARDLESS OF THE FORM OF ACTION WHETHER IN CONTRACT, TORT
        (INCLUDING NEGLIGENCE), OR OTHERWISE, EVEN IF WE HAVE BEEN ADVISED OF
        THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL OUR MAXIMUM LIABILITY
        EXCEED THE TOTAL AMOUNT PAID BY YOU FOR SERVICES, BUT IN NO EVENT
        GREATER THAN FOUR HUNDRED DOLLARS (US$400.00). BECAUSE SOME STATES DO
        NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR
        INCIDENTAL DAMAGES, IN SUCH STATES, OUR LIABILITY SHALL BE LIMITED TO
        THE MAXIMUM EXTENT PERMITTED BY LAW.
      </SubText>
      <h4>INDEMNITY.</h4>
      <SubText>
        You hereby release and agree to indemnify, defend, and hold GoDomains,
        as well as the contractors, agents, employees, officers, directors,
        shareholders, and affiliates of such parties harmless from and against
        any and all liabilities, claims, damages, costs and expenses, including
        reasonable attorneys' fees and court costs, for third party claims
        relating to or arising under this Agreement, including any breach of any
        of your representations, warranties, covenants or obligations set forth
        in this Agreement, the Services provided hereunder, or your use of the
        Services, including, without limitation, infringement or alleged
        infringement by you, or by anyone else using the Services, of any
        intellectual property or other right of any person or entity, or from
        the violation or alleged violation of any of our or GoDomains operating
        rules or policies relating to the Services provided. We may seek written
        assurances from you in which you promise to indemnify, defend, and hold
        us harmless from the costs and liabilities described in this paragraph.
        Such written assurances may include, in our sole discretion, the posting
        of a performance bond(s) or other guarantees reasonably calculated to
        guarantee payment. Your failure to provide such assurances may be
        considered by us to be a breach of this Agreement by you and may, in our
        sole discretion, result in loss of your right to control the disposition
        of domain name Services for which you are the registrant and in relation
        to which we are the registrar of record. This indemnification is in
        addition to any indemnification (a) required, or any other policy or any
        policy of any relevant registry; or (b) set forth elsewhere in this
        Agreement.
      </SubText>
      <h4>REPRESENTATIONS AND WARRANTIES.</h4>
      <SubText>
        YOU REPRESENT AND WARRANT THAT NEITHER THE REGISTRATION OF A DOMAIN NAME
        NOR THE MANNER IN WHICH IT IS DIRECTLY OR INDIRECTLY USED NOR THE USE OF
        OTHER OF THE SERVICES INFRINGES THE LEGAL RIGHTS OF A THIRD PARTY OR
        WILL OTHERWISE SUBJECT US TO A LEGAL CLAIM. THE SERVICES ARE INTENDED
        FOR USE BY PERSONS WHO ARE AT LEAST EIGHTEEN (18) YEARS OLD AND BY USING
        THE SERVICES, YOU REPRESENT AND WARRANT THAT YOU ARE AT LEAST EIGHTEEN
        (18) YEARS OLD AND ALL INFORMATION PROVIDED BY YOU IN CONNECTION WITH
        YOUR PROCUREMENT OF THE SERVICES IS ACCURATE. ALL SERVICES ARE PROVIDED
        TO YOU "AS IS" AND WITH ALL FAULTS. EXCEPT FOR OUR STATEMENT REGARDING
        OUR ACCREDITATION AS DOMAIN NAME REGISTRARS, WE MAKE NO REPRESENTATIONS
        OR WARRANTIES OF ANY KIND WHATSOEVER, EXPRESS OR IMPLIED, IN CONNECTION
        WITH THIS AGREEMENT OR THE SERVICES, INCLUDING BUT NOT LIMITED TO
        WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE,
        UNLESS SUCH REPRESENTATIONS AND WARRANTIES ARE NOT LEGALLY EXCLUDABLE.
        WITHOUT ANY LIMITATION TO THE FOREGOING, WE MAKE NO REPRESENTATIONS OR
        WARRANTIES OF ANY KIND WHATSOEVER THAT REGISTRATION OR USE OF A DOMAIN
        NAME UNDER THIS AGREEMENT WILL IMMUNIZE YOU EITHER FROM CHALLENGES TO
        YOUR DOMAIN NAME REGISTRATION, OR FROM SUSPENSION, CANCELLATION OR
        TRANSFER OF THE DOMAIN NAME REGISTERED TO YOU. ANY MATERIAL AND/OR DATA
        DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF OUR E-MAIL
        FORWARDING OR OTHER EMAIL SERVICE IS DONE AT YOUR OWN DISCRETION AND
        RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER
        SYSTEM OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF SUCH MATERIAL
        AND/OR DATA. WE MAKE NO WARRANTY REGARDING ANY GOODS OR SERVICES
        PURCHASED OR OBTAINED THROUGH OUR E-MAIL SERVICES OR ANY TRANSACTIONS
        ENTERED INTO THROUGH OUR E-MAIL SERVICES. NO ADVICE OR INFORMATION,
        WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM US SHALL CREATE ANY
        WARRANTY NOT EXPRESSLY MADE HEREIN. SOME JURISDICTIONS DO NOT ALLOW THE
        EXCLUSION OF CERTAIN WARRANTIES, SO SOME OF THE ABOVE EXCLUSIONS MAY NOT
        APPLY TO YOU.
      </SubText>
      <h4>GOVERNING LAW AND JURISDICTION FOR DISPUTES.</h4>
      <SubText>
        Except as otherwise set forth in Registry Policy, with respect to any
        dispute over a domain name registration, this Agreement, your rights and
        obligations and all actions contemplated by this Agreement shall be
        governed by the laws of the Seychelles as if the Agreement was a
        contract wholly entered into and wholly performed within the
        jurisdiction.
      </SubText>
      <SubText>
        Any dispute, claim or controversy arising out of or relating to this
        Agreement or the breach, termination, enforcement, interpretation or
        validity thereof, including the determination of the scope or
        applicability of the agreement to arbitrate, shall be determined by
        arbitration in Seychelles, before one arbitrator. The arbitration shall
        be administered by the Arbitration Association pursuant to its
        Commercial Arbitration Rules and Procedures. Judgment on the Award may
        be entered in any court having jurisdiction.
      </SubText>
      <SubText>
        YOU AND WE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN
        INDIVIDUAL CAPACITY, AND NOT AS A CLASS MEMBER IN ANY FORM OF A CLASS
        PROCEEDING. Further, unless both you and we expressly agree otherwise in
        writing, the arbitrator may not consolidate more than one person's
        claims, and may not otherwise preside over any form of a class
        proceeding. This clause shall not preclude parties from seeking
        provisional remedies in aid of arbitration from a court of appropriate
        jurisdiction. Service of process on you by us in relation to any dispute
        arising under this Agreement may be served upon you by first class mail
        to the address listed by you in your Account and/or domain name
        information or by electronically transmitting a true copy of the papers
        to the email address listed by you in your Account and/or domain name
        information.
      </SubText>
      <SubText>
        Notwithstanding the foregoing, for the adjudication of third party
        disputes (i.e., disputes between you and another party, not us)
        concerning or arising from use of domain names registered hereunder, you
        shall submit without objection, without prejudice to other potentially
        applicable jurisdictions, to the subject matter and personal
        jurisdiction of the courts (i) of the domicile of the registrant as it
        appears in the public WHOIS record for the domain name(s) in
        controversy, and (ii) where we are located, currently those State or
        federal courts in Seychelles
      </SubText>
    </AboutContainer>
  )
}

export default TACForDomainRegistration
