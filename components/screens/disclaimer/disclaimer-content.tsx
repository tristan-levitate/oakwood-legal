import React from 'react';

export default function DisclaimerContent() {
    return (
        <section className="w-full max-w-[1600px] mx-auto px-8 py-16">
            <div className="max-w-4xl mx-auto">
                <article className="prose prose-lg prose-invert max-w-none">
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <h1 className="text-white font-helvetica text-[42px] max-[480px]:text-[32px] leading-tight mb-4">
                            LEGAL DISCLAIMER
                        </h1>
                    </header>

                    {/* Main Content */}
                    <div className="space-y-8 text-[#C7C7C7] leading-relaxed font-neue-montreal">
                        <section>
                            <h2 className="text-white font-helvetica text-2xl mb-4">ATTORNEY ADVERTISING</h2>
                            <p>
                                This website may be construed as legal advertising.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white font-helvetica text-2xl mb-4">DISCLAIMER</h2>
                            <p>
                                The information contained on this website is intended as general educational material only and does not constitute legal advice. Any information contained on this website should not be relied upon without consulting with an attorney licensed to practice in the jurisdiction in which your matter arises. Laws and legal requirements are subject to revision and interpretation. We make no representation, warranty or claim that the information contained on this website is current. We are not responsible for any errors or omissions in the resources or information available at or from this website.
                            </p>
                            <p>
                                Any results portrayed in this advertisement are dependent upon the facts and law applicable to each particular case, and results will differ based on the particular facts and law applicable in each case. Nothing contained on this website constitutes a guarantee, warranty or prediction regarding the outcome of a specific legal matter.
                            </p>
                            <p>
                                No attorney-client relationship is formed by the use of this site, by requesting further information, or by submitting information via any form on this website. Legal services are not available in all jurisdictions.
                            </p>
                            <p>
                                Michael D. Terani, Esq. & Raymond J. Zolekhian, Esq. of the law firm Oakwood Legal Group are licensed to practice law in the State of California and are responsible for this communication.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-white font-helvetica text-2xl mb-4">SPANISH LANGUAGE SERVICES</h2>
                            <div className="bg-[rgba(192,43,39,0.1)] border-l-4 border-[#C02B27] p-6 rounded-r-lg">
                                <p className="mb-4">
                                    <strong className="text-white">English:</strong> Spanish speakers are non-attorney staff assistants employed by Oakwood Legal Group. The non-attorney staff assistants are not members of the State Bar of California and are not licensed to practice law.
                                </p>
                                <p>
                                    <strong className="text-white">Español:</strong> Español proviene de asistentes no abogado personal contratados por la Oakwood Legal Group. Los asistentes no abogado personal no son miembros de la barra de estado de California y no tienen licencia para ejercer la abogacía.
                                </p>
                            </div>
                        </section>
                    </div>
                </article>
            </div>
        </section>
    );
}
