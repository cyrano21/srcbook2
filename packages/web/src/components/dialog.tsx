import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@radix-ui/react-dialog';

// ...existing code...

const InstallPackageModal = () => (
  <Dialog>
    <DialogContent>
      <DialogTitle>Install Package</DialogTitle>
      <DialogDescription>
        {/* Ajoutez une description appropriée ici */}
        Please provide the package name to install.
      </DialogDescription>
      {/* ...existing code... */}
    </DialogContent>
  </Dialog>
);

// ...existing code...
