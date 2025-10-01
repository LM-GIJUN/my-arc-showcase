import { useState } from "react";
import { X, Download, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import type { PortfolioData } from "@/types/portfolio";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioData: PortfolioData;
  onSave: (data: PortfolioData) => void;
}

const AdminPanel = ({ isOpen, onClose, portfolioData, onSave }: AdminPanelProps) => {
  const [jsonData, setJsonData] = useState(JSON.stringify(portfolioData, null, 2));

  if (!isOpen) return null;

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonData);
      onSave(parsed);
      toast.success("Changes saved successfully!");
    } catch (error) {
      toast.error("Invalid JSON format. Please check your input.");
    }
  };

  const handleDownload = () => {
    try {
      const parsed = JSON.parse(jsonData);
      const blob = new Blob([JSON.stringify(parsed, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "portfolio-data.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success("Portfolio data downloaded!");
    } catch (error) {
      toast.error("Invalid JSON format. Cannot download.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-2xl font-bold gradient-text">Admin Panel</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Edit your portfolio data in JSON format
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 180px)" }}>
          <Textarea
            value={jsonData}
            onChange={(e) => setJsonData(e.target.value)}
            className="font-mono text-sm min-h-[600px] resize-none"
            placeholder="Edit your portfolio data here..."
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="outline" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />
            Download JSON
          </Button>
          <Button onClick={handleSave} className="hero-gradient text-white">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
