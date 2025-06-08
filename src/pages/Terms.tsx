
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Welcome to Shoora ("we," "our," or "us"). By accessing or using our platform, you agree to be bound by these Terms & Conditions. Please read them carefully.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Shoora platform, you agree to be bound by these Terms & Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on Shoora's platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose;</li>
              <li>Attempt to decompile or reverse engineer any software contained on Shoora's platform;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
            <p>
              The materials on Shoora's platform are provided on an 'as is' basis. Shoora makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Limitations</h2>
            <p>
              In no event shall Shoora or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Shoora's platform, even if Shoora or a Shoora authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Shoora's platform could include technical, typographical, or photographic errors. Shoora does not warrant that any of the materials on its platform are accurate, complete, or current. Shoora may make changes to the materials contained on its platform at any time without notice.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Links</h2>
            <p>
              Shoora has not reviewed all of the sites linked to its platform and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Shoora of the site. Use of any such linked website is at the user's own risk.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Modifications</h2>
            <p>
              Shoora may revise these terms of service for its platform at any time without notice. By using this platform you are agreeing to be bound by the then current version of these terms and conditions.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at support@shoora.com.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
