import LinkTextSpan from "components/LinkTextSpan";
import MainLayout from "components/MainLayout";
import Panel from "components/Panel";
import StyledLink from "components/StyledLink";
import { Document, Page } from 'react-pdf';

export default function ResumePage() {
  return (
    <MainLayout>
      {/* fix react pdf misalignment. why does nothing ever just work? */}
      <style jsx>{`
        :global(.react-pdf__Page__textContent) {
          top: 0 !important;
          left: 0 !important;
          transform: none !important;
        }

        :global(.react-pdf__Page__annotations) {
          display: none !important;
        }
      `}</style>

      <div className="my-10 flex flex-row justify-between align-middle">
        <h1 className="ml-4">Resume</h1>
        <a href="CallumJHaysResume.pdf" download="CallumJHaysResume.pdf">

          <LinkTextSpan className="text-xl">
            <div className="h-5" />
            Download PDF
          </LinkTextSpan>
        </a>
      </div>

      <div className="ml-6">
        <Document file="CallumJHaysResume.pdf">
          <Page pageIndex={0} className="-mb-12" scale={1.2} />
          <Page pageIndex={1} className="-mt-14" scale={1.2} />
        </Document>
      </div>
    </MainLayout>
  );
}
